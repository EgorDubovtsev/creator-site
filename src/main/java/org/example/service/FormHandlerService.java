package org.example.service;

import org.example.controller.dto.RequestFormRequest;
import org.example.entity.ContactRequestEntity;

import java.util.List;

public interface FormHandlerService {
    void handleRequest(RequestFormRequest request);

    List<ContactRequestEntity> getContactsForSend(int batch);

    void sendMail(ContactRequestEntity contactRequestEntity);

    void saveSendResults(List<ContactRequestEntity> contactsForSend);
}
