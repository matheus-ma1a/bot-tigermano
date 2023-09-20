import { Telegraf } from 'telegraf'
// import { mensagens } from './mensagens';


const bot = new Telegraf('6526856704:AAFE2Pyo-B5xvBhdIPN05AW8O8cWkF6GQvg');
const canal = '-1001967744359'
const linkJogo = 'https://go.flybet.com/C-I6NA3MZRW1'
const link = 'https://go.flybet.com/C-I6NA3MZRW1'

// bot.use((ctx)=>{
//   console.log(ctx.update)
// })


presinal()

function presinal() {
  setTimeout(() => {
    bot.telegram.sendMessage(canal, `

🚨 Atenção! O Tigre vai falhar 
🤑Prepare-se para lucrar em 2 minutos 

🐯💰🐯💰🐯💰🐯💰🐯💰🐯💰🐯

`, { disable_web_page_preview: true, parse_mode: 'HTML' })
    primeiraMsg()
  }, 12000)
}

function primeiraMsg() {

  setTimeout(() => {
    const jogadas = ["7", "8", "9", "10", "11", '12', "13", "14", "15", "16"]
    const estrategias = ['Horários pagantes','Sequência de MegaGanho','Tática Wild','Ganho Supremo','Rodada Turbo']
    const numaleatorio = Math.floor(Math.random() * 10);
    const numEstragtegia = Math.floor(Math.random() * 5);

    bot.telegram.sendMessage(canal, `

🐯FALHA CONFIRMADA🐯
🍀Fortune Tiger🐯

✅Estratégia: ${estrategias[numEstragtegia]}
⏱️Válido até: x ${horaMinutos()}
🎮Máximo de jogadas: ${jogadas[numaleatorio]}

🐯Link do jogo: <a href="${linkJogo}">Clique aqui</a>
📲Única plataforma que funciona o sinal: <a href="${link}">Tiger Fortune</a>

❌ SINAIS SÓ FUNCIONAM NA PLATAFORMA ACIMA, NÃO TENTE EM OUTRA

`,
      { parse_mode: "HTML", disable_notification: false, disable_web_page_preview: true })
    SegundaMsg()
  }, 18000)
}

function SegundaMsg() {

  setTimeout(() => {

    bot.telegram.sendMessage(
      canal, `

✅✅✅ VITÓRIA ✅✅✅

💰 Lucrou? Mande o print para nosso @SuporteVip_Online
⏱️ Fique atento ao prazo dos sinais

<a href="${link}">🎁 GANHE ATÉ R$5000,00 AQUI</a>

🔥🐯🔥🐯🔥🐯🔥🐯🔥🐯🔥🐯

`, { parse_mode: "HTML", disable_notification: false, disable_web_page_preview: true })
    presinal()
  }, 36000);
}

function horaMinutos() {
  const expiryTime = 3; // tempo de expiração em minutos
  const now = new Date();
  const expiry = new Date(now.getTime() + expiryTime * 60 * 1000);
  const hours = String(expiry.getHours()).padStart(2, '0');
  const minutes = String(expiry.getMinutes()).padStart(2, '0');

  return hours + ':' + minutes

}

function mensagens () {

  console.log('rodando comunicacao');

  function horaMinutos() {
    const data = new Date()
    const hora = String(data.getHours()).padStart(2, "0")
    const minutos = String(data.getMinutes()).padStart(2, "0")
    return `${hora}${minutos}`

  }

  setInterval(() => {
    
    
    if (horaMinutos() == '0003' || horaMinutos() == '1243' || horaMinutos() == '1853') {
      
      bot.telegram.sendMediaGroup(canal, [//mensagem de 00:03
          {
            type: 'photo',
            media: { source: './assets/tiger/photo_2023-09-08_15-25-37.jpg' },
            caption: `Tiger esta liberando dinheiro muito Facil
    
            TEM MUITA GENTE LUCRANDO E MANDADO PRINT A TODO MOMENTO
            
            🐯 A galera tá FALINDO A CASA com nossos sinais e você ainda não começou a jogar?
            
            👉 Cadastre-se aqui <a href="${link}">e venha fazer dinheiro com a gente 🔥💰</a>
        
            `,
    
            parse_mode: 'HTML'
          },
          {
            type: 'photo',
            media: { source: './assets/tiger/photo_2023-07-17_15-02-50.jpg' }
          },
          {
            type: 'photo',
            media: { source: './assets/tiger/photo_2023-07-17_15-02-49.jpg' }
          },
    
        ])
    
    }

    if (horaMinutos() == '0013' || horaMinutos() == '0821' || horaMinutos() == '0928' || horaMinutos() == '1126' || horaMinutos() == '1353' || horaMinutos() == '1911') {
      bot.telegram.sendPoll(canal, '💀 VOCÊ TEM ALGUMA DESSAS DÚVIDAS? 👇', ['Como se cadastrar', 'Como fazer o primeiro depósito', 'Como pegar os sinais do robô', 'Como jogar'],)
    }

    if (horaMinutos() == '0028' || horaMinutos() == '2303') {
      bot.telegram.sendMessage(canal, `
  ❓ AINDA NÃO FEZ SEU CADASTRO? 
  ❓ AINDA NÃO FEZ SEU DEPOSITO?
  ❓ AINDA NÃO FEZ DINHEIRO HOJE?


  💀 Cadastre-se e jogue por esse link para aproveitar os sinais 👇 

  <a href="${link}">Cadastre-se agora mesmo</a>
      `, { parse_mode: 'HTML', disable_web_page_preview: true })
      
    }

    if (horaMinutos() == '0033') {
      bot.telegram.sendPoll(canal, 'Quem aproveitou os sinais de ontem?', ['Eu, claro!🔥', 'Dei mole, deixei passar 🤦‍♂️'],)
      
    }

    if (horaMinutos() == '0034' || horaMinutos() == '1558') {
      bot.telegram.sendMessage(canal, '💀 Responda a enquete que hoje vamos preparar novidades! 👆')
    
    }

    if (horaMinutos() == '0123' || horaMinutos() == '0933' || horaMinutos() == '1557') {
      bot.telegram.sendPoll(canal, '🔒Quem tá afim de fechar o dia com R$300 no bolso?', ['Euu!💀', 'Tô fazendo mais que isso já 😈'])
    }

    if (horaMinutos() == '0158' || horaMinutos() == '0849' ) {
      bot.telegram.sendMessage(canal, `
    ESSE É O MELHOR GRUPO DO BRASIL 🇧🇷 

  🔥 Temos 98% de assertividade todos os dias 

  Assista esse vídeo e veja com seus próprios olhos 👇 

  Quer jogar? <a href="${link}">Cadastre-se agora mesmo</a>

    `, { parse_mode: 'HTML', disable_web_page_preview: true })
    }

    if (horaMinutos() == '0227' || horaMinutos() == '0453' || horaMinutos() == '0748') {
      bot.telegram.sendPoll(canal, 'JÁ DEFINIU SUA META DE HOJE?', ['300 de lucro 💵', '600 de lucro💸', '900 de lucro💰'])
    }

    if (horaMinutos() == '0247' || horaMinutos() == '0913' || horaMinutos() == '1338' || horaMinutos() == '1837' || horaMinutos() == '2228') {

      bot.telegram.sendMediaGroup(canal,[
        {
          type: 'video',
          media: {source: './assets/tiger/04.mp4'},
          parse_mode: 'HTML',
          caption: `
          Lucrar de mais é muito cansativo 🥵🥵
    
          Mais um jogador acabou de mandar o print, e você? Quer ganhar 300 Reais todo dia, com consistência?? Faça agora seu cadastro, pegue os nossos sinais que você vai voar 🚀
          
          Se você ta lucrando, manda print para meu Suporte, para eu compartilhar com nosso time do grupo!!
          
          1⃣ Se cadastre
          2⃣ Faça depósito de R$30,00
          3⃣ Comece jogar copiando nossos sinais 
          
          <a href="${link}">Cadastre-se agora mesmo</a>
          
          `
        }
      ])

    }

    if (horaMinutos() == '0303' ) {

      bot.telegram.sendMediaGroup(canal, [//mensagem de 00:03
      {
        type: 'photo',
        media: { source: './assets/tiger/super ganha 80.jpg' },
        caption: `Acabei de começar, e olha so oque acabou de bater 🤑🤑 

        Estou operar junto com vocês hein, botei 40 reais agora e ja virou 120 reais
        
        Bora pra cima 🚀, e vamos ver como vou lucrar no dia , segundona pretendo parar com no minimo com 500tão🔥🤑
        
        
        <a href="${link}">Cadastre-se agora mesmo</a>
        
        💣💰 💀💣💰 💀`,

        parse_mode: 'HTML'
      },
    
    ])

    }

    if (horaMinutos() == '0317') {
      bot.telegram.sendMessage(canal, `De coração mesmo, Sou muito grato por ver uns feedback assim, ver que com meu trabalho, consigo mudar vidas ❤️

      📱 O celular não aguenta mais tantos depoimento de gente FALINDO A CASA
      
      Vem ganhar muita grana com a gente, que daqui 10 Min vamos lançar os melhores sinais para vocês!`, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Cadastre-se Clicando Aqui', url: `${link}` }
            ]
          ]
        }
      })
    }

    if (horaMinutos() == '0323') {
      bot.telegram.sendPoll(canal, 'EM QUAL ETAPA VOCÊ TÁ HOJE?', ['💀Falindo a casa todos os dias', '👀Ainda não cadastrei na Flybet', '🤦‍♂️Me cadastrei, mas não depositei', '🙋‍♂️Sou novo aqui e preciso de ajuda'])
    }

    if (horaMinutos() == '0333') {
      bot.telegram.sendMediaGroup(canal, [
        {
          type: 'audio',
          media: {
            source: './assets/audio 0333.ogg'
          }
        }
      ])
    }

    if (horaMinutos() == '0334' || horaMinutos() == '1219' || horaMinutos() == '1627') {
      bot.telegram.sendMessage(canal, `🔥🔥 Ouçam esse áudio acima 🔥🔥
      
      É mais um jogador Lucrando muito!!!!!! 🤑🤑
      
      `, {
        reply_markup: {
          inline_keyboard: [
            [
              { text: '👑 vem lucrar 👑', url: `${link}` }
            ]
          ]
        }
      })
    }

    if (horaMinutos() == '0348') {
      bot.telegram.sendMediaGroup(canal, [
        {
          type: 'photo',
          media: { source: './assets/tiger/photo_2023-09-08_15-55-27.jpg' },
          caption: 
          `
          Putaque pariu, segundona dessa e o tigre ta jorrando dinhiero pra nos galera!!

          Olha ai os prints que acabei de receber, a galera toda aproveitando que os slot ta liberando pra galera 🤑🤑
          
          Bora pra cima, e se você ainda nn tem cadastro, chega de perder tempo e clique aqui 👇👇
          
          <a href="${link}">Cadastre-se agora mesmo</a>
          `, parse_mode: 'HTML'
        },
        {
          type: 'photo',
          media: { source: './assets/tiger/photo_2023-09-08_15-55-32.jpg' },
        },
        {
          type: 'photo',
          media: { source: './assets/tiger/photo_2023-09-08_15-55-36.jpg' },
        },
      ])
    }

    if (horaMinutos() == '0349' || horaMinutos() == '0758' || horaMinutos() == '1503' || horaMinutos() == '2049') {
      bot.telegram.sendMessage(canal, `🔴 *PARE DE TOMAR RED* 🔴
      
      🤦‍♂️ Tem gente tomando RED por jogar na CASA ERRADA!
      
      🔹 NOSSOS SINAIS SÓ FUNCIONAM NA Flybet 🔹
      
      <a href="${link}">Cadastre-se agora mesmo</a>
      
      🟢 Chega de pegar RED! Comece pegar *GREENS* 
      
      💣💰 💀💣💰 💀
      `,{parse_mode: 'HTML'})
    }

    if (horaMinutos() == '0403' || horaMinutos() == '0636' || horaMinutos() == '2347') {
      bot.telegram.sendVideo(canal, 'https://t.me/SequencMensagimImpar/175',)
    }

    if (horaMinutos() == '0418' || horaMinutos() == '1228' || horaMinutos() == '1548') {
      bot.telegram.sendMessage(canal, `💀 QUEM TÁ FALINDO A CASA COM NOSSOS SINAIS? 💀
      
      🟢 Me mande um print dos seus resultados 
      clicando aqui
      
      🟢 Caso não fez seu cadastro
      <a href="${link}">Clique aqui e se cadastre agora mesmo</a> 
        
      
      🟢 Caso não fez o seu depósito
      <a href="${link}">Clique aqui e ganhe um bônus no primeiro depósito</a> 
      
      `, { parse_mode: 'HTML', disable_web_page_preview: true })
    }

    if (horaMinutos() == '0433' || horaMinutos() == '0833' || horaMinutos() == '1303' || horaMinutos() == '2248') {
      bot.telegram.sendMediaGroup(canal,[
        {
          type: 'video',
          media: {source: './assets/tiger/mlk de azul.mp4'},
          caption: 
          `
          Vlw Diegao 🚀 Tá ai, mais um jogador Faturando Muito 🤑🤑

          Fez mais de 1.000 Reais em 4 Horas, isso pegando e colando nosso sinal!!!

          🔥 Quem tá acompanhando o grupo sabe que aqui a assertividade tá insana mesmo!

          Sou extremamente grato por ver esses feedback TODOS OS DIAS, Bora pra cima 🚀
          

          <a href='${link}'> 🥇 Quer jogar? Clique aqui</a>

          `,
          parse_mode: 'HTML'
        }
      ])

    }

    if (horaMinutos() == '0539' || horaMinutos() == '0956') {
      bot.telegram.sendMessage(canal, `
      ☠️ NOTIFICAÇÃO DE FALECIMENTO

      ⚰️ Aos poucos nos vamos recuperando tudo que um dia tiraram de pessoas comuns…
      
      AGORA É NOSSA VEZ DE GANHAR 💰
      
      💀Se ainda não jogou, cadastre-se aqui
      `)
    }

    if (horaMinutos() == '0553' || horaMinutos() == '1517') {
      bot.telegram.sendMediaGroup(canal,[
        {
          type: 'video',
          media: {source: './assets/tiger/seper ganho veio.mov'},
          caption: 
          `
          Superganho veio 🤑🤑

          Avisei para apostarem junto comigo que nosso sinal não erra nunca!!!
          
          Ta moscando e ainda não tem seu cadastro?? 👇👇
          
          <a href='${link}'> 🥇 Quer jogar? Clique aqui</a>

          `,
          parse_mode: 'HTML'
        }
      ])
    }

    if (horaMinutos() == '0613') {
      bot.telegram.sendPoll(canal, 'QUEM JA ESTÁ ACORDADO?', ['EU, JA TAMO ON 🙅‍♂️', 'SO LEVANTEI, A ALMA AINDA TA NA CAMA 😴'])
    }

    if (horaMinutos() == '0656' || horaMinutos() == '1457' || horaMinutos() == '2046') {
      bot.telegram.sendPoll(canal, 'QUAL CASA DE APOSTAR VOCÊ USA?', ['Flybet', 'OUTRA CASA'])
    }

    if (horaMinutos() == '0659') {
      bot.telegram.sendMessage(canal, `<strong>VOCÊ PERDEU DINHEIRO…</strong> 

      É isso que acontece toda vez que usa a casa errada! 
      
      🚨 Atenção, nossos sinais só funcionam na Flybet
      
      💀 Quer colocar muito dinheiro no bolso e FALIR A CASA? 
      
      <a href='${link}'>Clique aqui</a>, Se cadastre e faça seu depósito agora mesmo
      `,),{parse_mode: 'html'}
    }

    if (horaMinutos() == '0717') {
      bot.telegram.sendMediaGroup(canal, [
        {
          type: 'photo',
          media: { source: './assets/tiger/photo_2023-09-08_16-07-47.jpg' },
          caption: `
          ⚠️ATENÇÃO, TOME MUITO CUIDADO ⚠️ 

          É possível que você pode se torne um desses jogadores!!
          
          Lucrar de mais é muito cansativo 🥵🥵
          
          Quer ganhar 300 Reais todo dia, com consistência?? Faça agora seu cadastro, pegue os nossos sinais que você vai voar 🚀
          
          <a href='${link}'>Clique aqui para se cadastrar</a>
          `,
          parse_mode: 'HTML'
        },
        {
          type: 'photo',
          media: { source: './assets/tiger/photo_2023-09-08_16-07-50.jpg' }
        },
        {
          type: 'photo',
          media: { source: './assets/tiger/photo_2023-09-08_16-07-53.jpg' }
        },
      ])
    }

    if (horaMinutos() == '1153' || horaMinutos() == '1648') {
      bot.telegram.sendMediaGroup(canal, [
        {
          type: 'video',
          media: { source: './assets/tiger/NãoPercaTempo.mp4' },
          caption: `
          Encontrada uma nova plataforma que esta pagando muito!! A Fly bet. Buscamos sempre as melhores plataforma para vocês lucrarem muito 🤑🤑

          O mais importante é o saque galera!! Muito facil sacar, diferente dessas casas lixo que da dor de cabeça. Lá é Ganhou, lucrou, Sacou!!
          
          Se você quer aproveitar para lucrar a hora e agora ⌛️
          
          Vamos com tudo falir mais uma casa de aposta, mas dessa vez sera a Fly bet 
          
             Deposito minimo de 30 Reais 😱
             E ainda receba 100% de Bonus
          
          <a href='${link}'>Clique aqui para se cadastrar</a>
          `, parse_mode: 'HTML'
        },
      ])
    }

  
  }, 60000)

}

mensagens()

bot.launch();