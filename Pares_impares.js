package com.example;
import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        List<Integer> pares = new ArrayList<Integer>();
        List<Integer> impare = new ArrayList<Integer>();
        

        System.out.println("Digita cuantos números quieres digitar: ");
        int cantidad = sc.nextInt();

        for(int i = 0; i < cantidad; i++){
            System.out.println("Ingresa el"+ (i+1)+":");
            int num = sc.nextInt();
            if(num % 2 == 0){
                pares.add(num);
            }else{
                impare.add(num);
            }
        }

      
    }
}
