package org.example.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class RequestFormRequest {
    @JsonProperty("name")
    private String name;

    @JsonProperty("siteType")
    private String siteType;

    @JsonProperty("phone")
    private String phone;

    @JsonProperty("email")
    private String email;

    @JsonProperty("message")
    private String message;
}
