---
title: Desenvolvimento de Aplicativos Web com ASP.NET Core
published: 2024-03-15
description: Uma breve introdução ao desenvolvimento web com ASP.NET Core
tags: [CSharp, Intro, ASP.NET, ASP.NET Core]
category: "ASP.NET Core"
draft: false
---

O ASP.NET Core é uma estrutura de desenvolvimento web moderna e poderosa para criar aplicativos web em C#. Neste post, vamos explorar como desenvolver aplicativos web com ASP.NET Core, abordando conceitos fundamentais e fornecendo exemplos práticos.

### Roteamento

O roteamento é o processo de mapear solicitações HTTP para ações em um controlador. No ASP.NET Core, o roteamento é configurado no arquivo `Startup.cs` e define como as URLs são tratadas pelo aplicativo.

```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRouting();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");
    });
}
```

Neste exemplo, estamos configurando o roteamento padrão para direcionar solicitações para o controlador `HomeController` e a ação `Index`.

### Middleware

O middleware é um componente que processa solicitações HTTP em um pipeline. No ASP.NET Core, o middleware é configurado no método `Configure` do arquivo `Startup.cs` e pode ser usado para executar lógica antes ou depois de manipular uma solicitação.

```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Error");
        app.UseHsts();
    }

    app.UseHttpsRedirection();
    app.UseStaticFiles();

    app.UseRouting();

    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

Neste exemplo, estamos usando middleware para redirecionar solicitações HTTP para HTTPS, servir arquivos estáticos e configurar a autenticação.

### Model-View-Controller (MVC)

O padrão Model-View-Controller (MVC) é uma abordagem comum para organizar o código em aplicativos web. No ASP.NET Core, o MVC é usado para separar as preocupações relacionadas a dados (Model), interface de usuário (View) e lógica de controle (Controller).

```csharp
public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
```

Neste exemplo, `HomeController` é um controlador que retorna uma `View` para a ação `Index`. A `View` é uma representação da interface de usuário que será exibida para o usuário.

O ASP.NET Core oferece uma ampla gama de recursos e ferramentas para criar aplicativos web modernos e escaláveis em C#. Espero que este post tenha fornecido uma visão geral útil do desenvolvimento de aplicativos web com ASP.NET Core. Nos próximos posts, vamos explorar esses conceitos com mais profundidade e fornecer exemplos mais avançados.
