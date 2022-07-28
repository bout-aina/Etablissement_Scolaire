package com.example.etablissementbackend.dtos;

import lombok.Data;

import java.util.List;

@Data
public class ModuleByProfDTO {
    private Long id;
    private String Nom_Complet;
    private String Mail;
    private String tel;
    private String Adresse;
    private List<String> nom_module;



}
