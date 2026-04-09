package org.example.service;

import io.github.bucket4j.*;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class RateLimiterService {

    private final ConcurrentHashMap<String, Bucket> buckets = new ConcurrentHashMap<>();

    public Bucket resolveBucket(String key) {
        return buckets.computeIfAbsent(key, k -> createBucket());
    }

    private Bucket createBucket() {
        Bandwidth limit = Bandwidth.classic(
                6, // максимум 10
                Refill.intervally(10, Duration.ofMinutes(10)) // раз в 10 минут
        );

        return Bucket.builder()
                .addLimit(limit)
                .build();
    }
}