

class Usuarios {

        constructor(){
            this.personas = []
        }


        agregarPersona(id, nombre, sala){

            let persona = {
                id, 
                nombre,
                sala
            }; 

            this.personas.push(persona);

            return this.personas;
        }

        getPersona(id){
           let persona = this.personas.filter(e => e.id === id)[0];

           return persona;
        }

        getPersonas(){
            return this.personas;
        }


        getPersonsaPorSala(sala){
            let personasEnSala = this.personas.filter(e => e.sala === sala);
            return personasEnSala
        }


        borrarPersona(id){

          let personaBorrada = this.getPersona(id);
          this.personas =  this.personas.filter(e => e.id != id);

          return personaBorrada;
        }

}


module.exports = {
    Usuarios
}