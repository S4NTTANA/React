package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tab_usuario")

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome é obrigatório.")
    private String nome;

    @NotBlank(message = "Sexo é obrigatório")
    private String sexo;

    @NotBlank(message = "A idade é obrigatória")
    private String idade;

    @NotBlank(message = "A altura é obrigatória")
    private String altura;

    @NotBlank(message = "O peso é obrigatório")
    private String peso;

    @NotBlank(message = "A posição em campo é obrigatória")
    private String posicao;

    @NotBlank(message = "O número da camisa é obrigatório")
    private String numeroCamisa;


    public Usuario() {
    }

    public Usuario(Long id, String nome, String sexo, String idade, String altura, String peso, String posicao, String numeroCamisa) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.posicao = posicao;
        this.numeroCamisa = numeroCamisa;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome é obrigatório.") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "Nome é obrigatório.") String nome) {
        this.nome = nome;
    }

    public @NotBlank(message = "Sexo é obrigatório") String getSexo() {
        return sexo;
    }

    public void setSexo(@NotBlank(message = "Sexo é obrigatório") String sexo) {
        this.sexo = sexo;
    }

    public @NotBlank(message = "A idade é obrigatória") String getIdade() {
        return idade;
    }

    public void setIdade(@NotBlank(message = "A idade é obrigatória") String idade) {
        this.idade = idade;
    }

    public @NotBlank(message = "A altura é obrigatória") String getAltura() {
        return altura;
    }

    public void setAltura(@NotBlank(message = "A altura é obrigatória") String altura) {
        this.altura = altura;
    }

    public @NotBlank(message = "O peso é obrigatório") String getPeso() {
        return peso;
    }

    public void setPeso(@NotBlank(message = "O peso é obrigatório") String peso) {
        this.peso = peso;
    }

    public @NotBlank(message = "A posição em campo é obrigatória") String getPosicao() {
        return posicao;
    }

    public void setPosicao(@NotBlank(message = "A posição em campo é obrigatória") String posicao) {
        this.posicao = posicao;
    }

    public @NotBlank(message = "O número da camisa é obrigatório") String getNumeroCamisa() {
        return numeroCamisa;
    }

    public void setNumeroCamisa(@NotBlank(message = "O número da camisa é obrigatório") String numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }
}

