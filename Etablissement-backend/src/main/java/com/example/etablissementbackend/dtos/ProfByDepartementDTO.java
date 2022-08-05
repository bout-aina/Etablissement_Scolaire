package com.example.etablissementbackend.dtos;

import lombok.Data;

import java.util.List;
@Data
public class ProfByDepartementDTO {
    private Long id;
    private String Nom_Departement;
    private String chef_Departement;
    private String Description;
    private List<String> nom_prof;
    private  List<String> nom_etd;
}
