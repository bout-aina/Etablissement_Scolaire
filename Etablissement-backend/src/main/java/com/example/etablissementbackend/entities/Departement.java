package com.example.etablissementbackend.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Departement {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomdep;
    private String chef;
    private String description;

    @OneToMany(mappedBy = "departement",fetch = FetchType.LAZY)
    private List<Etudiant> etudiants;

    @OneToMany(mappedBy = "departement",fetch = FetchType.LAZY)
    private List<Profs> profs;


}
