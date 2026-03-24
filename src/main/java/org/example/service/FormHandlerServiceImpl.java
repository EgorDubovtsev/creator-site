package org.example.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.controller.dto.RequestFormRequest;
import org.example.entity.ContactRequestEntity;
import org.example.repository.ContactRequestRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class FormHandlerServiceImpl implements FormHandlerService {
    private final JavaMailSender mailSender;
    private final ContactRequestRepository contactRequestRepository;
    @Value("${mail.to}")
    private String emailTo;

    @Value("${spring.mail.username}")
    private String username;

    private static final String SUBJECT = "Заявка. Сайт";

    @Override
    @Transactional
    public void handleRequest(RequestFormRequest request) {
        contactRequestRepository.save(ContactRequestEntity.builder()
                .siteType(request.getSiteType())
                .createdAt(LocalDateTime.now())
                .phone(request.getPhone())
                .email(request.getEmail())
                .isSend(false)
                .name(request.getName())
                .other(request.getMessage())
                .build());
    }

    @Override
    @Transactional(readOnly = true)
    public List<ContactRequestEntity> getContactsForSend(int batch) {
        PageRequest pageRequest = PageRequest.of(0, batch);
        return contactRequestRepository.findAllUnsend(pageRequest).getContent();
    }

    @Override
    public void sendMail(ContactRequestEntity contactRequestEntity) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(emailTo);
        message.setSubject(SUBJECT);
        message.setText(contactRequestEntity.toString());
        message.setFrom(username);
        try {
            log.info("Send mail {} {}",contactRequestEntity.getId(), message);
            mailSender.send(message);

        } catch (Exception e) {
            log.info("Error message send ", e);
            throw e;
        }
    }

    @Override
    @Transactional
    public void saveSendResults(List<ContactRequestEntity> contactsForSend) {
        contactRequestRepository.saveAll(contactsForSend);
    }

}
