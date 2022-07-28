package com.example.etablissementbackend.repositories;

import com.example.etablissementbackend.entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartementRepository  extends JpaRepository<Departement,Long> {
    // List<Departement> findByNom_Departement(String nom_departement);
    @Query("select c from Departement c where c.Nom_Departement like :kw")
    List<Departement> searchDepartement(@Param("kw") String keyword);


}

