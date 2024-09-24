package com.example;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Se importo el escanner para luego utilizarlo
        Scanner sca = new Scanner(System.in);

        // Aqui le preguntamos al usuario
        System.out.println("Digita por favor cuantas calificaciones son: ");
        // se define la variable como entero, se le pone nombre y se utiliza el escaner
        int cantidad = sca.nextInt();

        // definese el tipo del vector y luego poner corchetes se define nombre y al final se le define la cantidad

        // vector y la lista, es que el vector solo se le puede definir una cantidad mientras la lista se puede ir como cambiando el tamaño

        // tipo de dato [indice] nombre de variable
        double[] notas = new double[cantidad];

        double totalnotas = 0;

        // Recorrer el vector para almacenar los datos de las notas
        for(int i = 0; i < notas.length; i++){
            int n = i + 1;
            System.out.println("digita la nota "+ n );

            // Acá hacemos un input que se guarda por cada pasada que de en el for
            // notas = [2,2]
            //          0,1
            // nombre variable[indice]
            notas[i] =  sca.nextDouble();
        }

        for(int p = 0; p < notas.length; p++){

            System.out.println("["+p+"]"+notas[p]);


            totalnotas += notas[p] / notas.length ;

        }

        System.out.println("Cantidad de notas: "+cantidad);
        System.out.println(totalnotas);

        if(totalnotas >= 60 ){
            System.out.println("El estudiante aprobo");
        }else if(totalnotas >= 0 && totalnotas <= 59){
            System.out.println("El estudiante reprobo");
        }else{
            System.out.println("el numero debe ser mayor a cero");
        }

        
        

       


    }
}
