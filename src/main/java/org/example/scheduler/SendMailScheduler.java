package org.example.scheduler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.entity.ContactRequestEntity;
import org.example.service.FormHandlerService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class SendMailScheduler {
    private final FormHandlerService formHandlerService;
    @Value("${mail.batchSize}")
    private int batchSize;

    @Scheduled(cron = "${crons.mailSender}")
    public void sendMail(){
        List<ContactRequestEntity> contactsForSend = formHandlerService.getContactsForSend(batchSize);
        for (ContactRequestEntity contactRequestEntity : contactsForSend) {
            try {
                formHandlerService.sendMail(contactRequestEntity);
                contactRequestEntity.setIsSend(true);
            } catch (Exception e) {
                log.info("Ошибка отправки {}", contactRequestEntity.getId());
            }

        }
        formHandlerService.saveSendResults(contactsForSend);
    }
}
