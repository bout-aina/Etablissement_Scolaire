package com.example.etablissementbackend.repositories;

import com.example.etablissementbackend.entities.Etudiant;
import com.example.etablissementbackend.entities.Module;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {

    Page<Etudiant> findByNomContains(String kw, Pageable pageable);
    public List<Etudiant> findAllByOrderByNomAsc();
    @Query("select m from Etudiant m where m.nom like :kw")

    List<Etudiant> alletd(@Param("kw") String keyword);
    @Query("select count(p.id) from  Etudiant p group by p.departement")
    List<Integer> nbrEtdPourChaqueDep();
    @Query("select count(p.id) from  Etudiant p group by p.etat order by p.etat")
    List<Float> pourcentageDechaqueEat();
    @Query("select count(id) from  Etudiant ")
    int sizeList();

}
