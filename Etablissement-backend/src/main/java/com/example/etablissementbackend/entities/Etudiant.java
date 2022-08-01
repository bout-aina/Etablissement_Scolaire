package com.example.etablissementbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String adresse;
    private String telper;
    private String telpar;
    private String mail;
    private String sex;
    private String image;
    private String etat;

    @ManyToOne

    private Departement departement;
}
