---
title: Primeiros passos na Linguagem C#
published: 2024-03-28
description: Primeiros passos
tags: [CSharp, Intro]
category: "CSharp"
draft: false
---

# Primeiros Passos na Linguagem CSharp

C# é uma linguagem de programação moderna, orientada a objetos e fortemente tipada. É uma das linguagens fundamentais para o desenvolvimento no ambiente .NET da Microsoft. O C# é amplamente utilizado para desenvolver uma variedade de aplicações, desde aplicações web até aplicativos móveis e jogos.

## Configuração do Ambiente de Desenvolvimento

Para começar a programar em C#, você precisará instalar o Visual Studio ou o Visual Studio Code, que são IDEs (Integrated Development Environment) fornecidos pela Microsoft. Além disso, você precisará do SDK do .NET instalado em seu sistema.

## Sintaxe Básica do CSharp

Aqui estão alguns conceitos básicos de sintaxe em C#:

```csharp
// Declaração de variáveis
int minhaIdade = 25;
string meuNome = "João";

// Estruturas de controle
if (minhaIdade > 18)
{
    Console.WriteLine("Você é maior de idade.");
}
else
{
    Console.WriteLine("Você é menor de idade.");
}

// Funções e métodos
void Saudacao(string nome)
{
    Console.WriteLine("Olá, " + nome);
}
```

## Primeiro Programa em CSharp

Vamos criar um projeto simples e escrever "Olá, Mundo!" no console.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Olá, Mundo!");
    }
}
```

## Manipulação de Dados

Em C#, você pode trabalhar com vários tipos de dados, incluindo strings, números e booleanos.

```csharp
string nome = "João";
int idade = 25;
bool isAdulto = idade > 18;
```

## Tratamento de Exceções

O tratamento de exceções em C# é feito usando os blocos try, catch e finally.

```csharp
try
{
    // Código que pode lançar uma exceção
}
catch (Exception ex)
{
    // Lidar com a exceção
}
finally
{
    // Código que é executado, independentemente de uma exceção ser lançada
}
```

## Projeto Prático

Vamos desenvolver um aplicativo pequeno, como uma calculadora simples.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Digite o primeiro número: ");
        int num1 = Convert.ToInt32(Console.ReadLine());

        Console.Write("Digite o segundo número: ");
        int num2 = Convert.ToInt32(Console.ReadLine());

        int soma = num1 + num2;

        Console.WriteLine("A soma é " + soma);
    }
}
```
