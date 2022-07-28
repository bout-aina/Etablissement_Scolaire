package com.example.etablissementbackend.dtos;

import lombok.Data;


@Data
public class ProfsDTO {
    private Long id;
    private String nom_complet;
    private String mail;
    private String tel;
    private String adresse;
    private String nom_departement;


}
