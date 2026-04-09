package org.example.controller;

import io.github.bucket4j.Bucket;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.controller.dto.RequestFormRequest;
import org.example.service.FormHandlerService;
import org.example.service.RateLimiterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class MainController {
    private final FormHandlerService formHandlerService;
    private final RateLimiterService rateLimiterService;

    @PostMapping("/form/request")
    public ResponseEntity<String> sendForm(@RequestBody RequestFormRequest requestBody,
                         HttpServletRequest request,
                         HttpSession session
                         ){
        log.info("/form/request New request {}", request);

        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null) ip = request.getRemoteAddr();
        if (ip.contains(",")) ip = ip.split(",")[0];

        String sessionId = session.getId();
        String email = requestBody.getEmail(); // если есть

        String key = ip + ":" + sessionId + ":" + email;

        Bucket bucket = rateLimiterService.resolveBucket(key);

        if (!bucket.tryConsume(1)) {
            return ResponseEntity
                    .status(429)
                    .header("Retry-After", "600")
                    .body("Слишком много запросов. Подождите 10 минут");
        }

        formHandlerService.handleRequest(requestBody);
        return ResponseEntity.ok().build();
    }
}
