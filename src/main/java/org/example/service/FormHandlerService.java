package org.example.service;

import jakarta.mail.MessagingException;
import org.example.controller.dto.RequestFormRequest;
import org.example.entity.ContactRequestEntity;

import java.util.List;

public interface FormHandlerService {
    void handleRequest(RequestFormRequest request);

    List<ContactRequestEntity> getContactsForSend(int batch);

    void sendMail(ContactRequestEntity contactRequestEntity) throws MessagingException;

    void saveSendResults(List<ContactRequestEntity> contactsForSend);
}
