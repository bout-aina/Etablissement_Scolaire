package com.example.etablissementbackend.repositories;

import com.example.etablissementbackend.entities.Etudiant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {

    Page<Etudiant> findByNomContains(String kw, Pageable pageable);
    public List<Etudiant> findAllByOrderByNomAsc();
}
