package com.example.etablissementbackend.web;

import com.example.etablissementbackend.dtos.EtudiantDTO;
import com.example.etablissementbackend.dtos.ModuleDTO;
import com.example.etablissementbackend.entities.Module;
import com.example.etablissementbackend.exceptions.ModuleNotFoundException;
import com.example.etablissementbackend.exceptions.ProfsNotFoundException;
import com.example.etablissementbackend.services.EtablissementService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class ModuleRestController {
    private EtablissementService etablissementService;
    @GetMapping("/modules")
    public List<ModuleDTO> modules(){
        return etablissementService.moduleList();

    }
    @GetMapping("/profByname")
    public List<String> profByname(){
        return etablissementService.GetprofByName();

    }
    @GetMapping("/modules/{id}")
    public  ModuleDTO getModule(@PathVariable(name = "id") Long moduleId) throws ModuleNotFoundException {
        return etablissementService.getModule(moduleId);

    }
   @PostMapping("/modules")
    public  ModuleDTO saveModule(@RequestBody ModuleDTO moduleDTO)  {
       return etablissementService.saveModule(moduleDTO);
    }
    @DeleteMapping("/modules/{id}")
    public void deleteModule(@PathVariable Long id){

        etablissementService.deleteModule(id);
    }
    @GetMapping("/modules/search")
    public List<ModuleDTO> searchModules2(@RequestParam(name ="keyword",defaultValue = "") String keyword){
        return etablissementService.allmodules("%"+keyword+"%");
    }
    @PutMapping("/modules/{id}")
    public  ModuleDTO updateModule(@PathVariable Long id,@RequestBody ModuleDTO moduleDTO)  {
        return etablissementService.updateModule(id,moduleDTO);
    }

}
