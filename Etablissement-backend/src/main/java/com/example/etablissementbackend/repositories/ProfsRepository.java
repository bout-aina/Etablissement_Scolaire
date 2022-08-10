package com.example.etablissementbackend.repositories;

import com.example.etablissementbackend.entities.Departement;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.entities.Profs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProfsRepository extends JpaRepository<Profs,Long> {

    @Query("select c from Profs c where c.Nom_Complet like :kw")
    List<Profs> searchProf(@Param("kw") String keyword);

    @Query("select count(p.id) from  Profs p group by p.departement")
    List<Integer> nbrProfPourChaqueDep();

    @Query("select m from Profs m where m.Nom_Complet like :kw")

    List<Profs> allprofs(@Param("kw") String keyword);
}
