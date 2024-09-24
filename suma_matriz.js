package com.example;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
       Scanner sc  = new Scanner(System.in);

       System.out.println("Digita filas de la matriz");
       int fila = sc.nextInt();
       System.out.println("Digita columnas de la matriz");
       int columnas = sc.nextInt();

        int[][] matriz1 = new int[fila][columnas];
        int[][] matriz2 = new int[fila][columnas];
        int[][] sumasmatriz = new int[fila][columnas];

        System.out.println("Introduce los valores de la primera matiz: ");
        for(int i = 0; i < fila; i++){
            for(int j = 0; j < columnas; j++){
                System.out.println("Estas en fila ["+i+"] de la columna ["+j+"]: ");
                matriz1[i][j] = sc.nextInt();
            }
        }

        System.out.println("Introduce los valores de la segunda matiz: ");
        for(int i = 0; i < fila; i++){
            for(int j = 0; j < columnas; j++){
                System.out.println("Estas en fila ["+i+"] de la columna ["+j+"]: ");
                matriz2[i][j] = sc.nextInt();
            }
        }
       
        for(int i = 0; i < fila; i++){
            for(int j = 0; j < columnas; j++){
                
                sumasmatriz[i][j] = matriz1[i][j] + matriz2[i][j];
            }
        }

        for(int i = 0; i < fila; i++){
            for(int j = 0; j < columnas; j++){
                System.out.println("Estas en fila ["+i+"] de la columna ["+j+"]: ");
                System.out.println(sumasmatriz[i][j]+ " ");
            }
            System.out.println();
        }
    }
}
