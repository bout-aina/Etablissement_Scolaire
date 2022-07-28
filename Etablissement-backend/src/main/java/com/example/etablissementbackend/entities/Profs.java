package com.example.etablissementbackend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Profs {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Nom_Complet;
    private String Mail;
    private String tel;
    private String Adresse;
    @ManyToOne
    private Departement departement;

    @OneToMany(mappedBy = "profs",fetch = FetchType.LAZY)
    private List<Module> module;

}
