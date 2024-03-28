---
title: Introdução à Programação Orientada a Objetos em C#
published: 2024-01-15
description: Tudo que precisas saber sobre Funções em C#
tags: [CSharp, Intro, POO]
category: "CSharp"
draft: false
---

A Programação Orientada a Objetos (POO) é um paradigma de programação fundamental em C# e em muitas outras linguagens modernas. Neste post, vamos explorar os conceitos básicos da POO em C#, incluindo classes, objetos, herança, encapsulamento e polimorfismo.

### Classes e Objetos

Em C#, uma classe é um modelo para criar objetos. Ela define os atributos e comportamentos que os objetos de uma determinada classe terão. Por exemplo:

```csharp
public class Carro
{
    public string Modelo;
    public int Ano;

    public void Acelerar()
    {
        Console.WriteLine("Vrum vrum!");
    }
}
```

Neste exemplo, `Carro` é uma classe que define dois atributos (`Modelo` e `Ano`) e um método (`Acelerar`).

### Herança

Herança é um conceito importante na POO, que permite que uma classe herde atributos e comportamentos de outra classe. Por exemplo:

```csharp
public class CarroEsportivo : Carro
{
    public void Turbo()
    {
        Console.WriteLine("Ativando turbo!");
    }
}
```

Aqui, `CarroEsportivo` é uma subclasse de `Carro`, herdando todos os seus atributos e métodos, e também adicionando um novo método `Turbo`.

### Encapsulamento

Encapsulamento é o conceito de esconder os detalhes de implementação de uma classe e fornecer uma interface simples para interagir com ela. Em C#, isso é geralmente alcançado usando modificadores de acesso, como `public`, `private` e `protected`.

```csharp
public class ContaBancaria
{
    private decimal saldo;

    public void Depositar(decimal valor)
    {
        saldo += valor;
    }

    public decimal ConsultarSaldo()
    {
        return saldo;
    }
}
```

Neste exemplo, `saldo` é encapsulado e só pode ser acessado por métodos da própria classe.

### Polimorfismo

Polimorfismo permite que objetos de diferentes classes sejam tratados de maneira uniforme. Em C#, isso é frequentemente alcançado através de métodos virtuais e substituição de métodos.

```csharp
public class Animal
{
    public virtual void EmitirSom()
    {
        Console.WriteLine("Som genérico de animal");
    }
}

public class Cachorro : Animal
{
    public override void EmitirSom()
    {
        Console.WriteLine("Au au!");
    }
}
```

Aqui, `Cachorro` herda de `Animal` e substitui o método `EmitirSom` para emitir um som específico de cachorro.

A Programação Orientada a Objetos em C# é um conceito vasto e fundamental para qualquer programador. Espero que este post tenha fornecido uma introdução útil aos conceitos básicos da POO em C#. Nos próximos posts, vamos explorar esses conceitos com mais detalhes e exemplos práticos.
