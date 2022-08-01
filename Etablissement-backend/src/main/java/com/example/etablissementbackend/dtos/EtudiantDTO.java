package com.example.etablissementbackend.dtos;

import lombok.Data;

@Data
public class EtudiantDTO {
    private Long id;
    private String nom;
    private String adresse;
    private String telper;
    private String telpar;
    private String mail;
    private String sex;
    private String image;
    private String etat;
    private String nom_departement;



}
