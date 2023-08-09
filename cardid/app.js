import { getDatabase, ref, set, push, child, get, remove } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAP8hj7lSAwmQmxgfJRzTrdtYYJtckXbpQ",
  authDomain: "carteirinhas-icone.firebaseapp.com",
  projectId: "carteirinhas-icone",
  storageBucket: "carteirinhas-icone.appspot.com",
  messagingSenderId: "56784942993",
  appId: "1:56784942993:web:bee8ad1b22e6e20eb28c30"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const database = getDatabase(app);

const dbRef = ref(getDatabase());

setInterval(()=>{
  document.getElementById('body').style.display = 'block'
}, 1000*1.5)

get(child(dbRef, 'Sponte_API/')).then((snapshot) => {
    if (snapshot.exists()) {


        const data = snapshot.val()
        
        const codClienteUnidadeI = data.unidade_i.codigo_cliente
        const tokenUnidadeI = data.unidade_i.token

        const codClienteUnidadeII = data.unidade_ii.codigo_cliente
        const tokenUnidadeII = data.unidade_ii.token

        const codClienteUnidadeIII = data.unidade_iii.codigo_cliente
        const tokenUnidadeIII = data.unidade_iii.token

        const codClienteUnidadeIV = data.unidade_iv.codigo_cliente
        const tokenUnidadeIV = data.unidade_iv.token

        document.getElementById('unidade').addEventListener('change', ()=>{
            const unidade = document.getElementById('unidade').value
            document.getElementById('ul-cards').innerHTML = ''

            if(unidade == 'unidadeI'){
                document.getElementById('turmasInput').innerHTML = '<option value="">--Selecione a Turma--</option>'
                document.getElementById('select-turma-list').innerHTML = '<option value="null">--Selecione a Turma--</option>'
                document.getElementById('alunosInput').innerHTML = '<option value="">--Selecione o Aluno--</option>'
                document.getElementById('ul-cards').innerHTML = '<li> <ul class="card" id="card"> <li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li> <li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li> </ul> <div class="dados-alunos" id="dados-alunos"> <img src="" alt="" class="photo" id="photo"> <div id="matricula"></div> <div id="name"></div> <div id="turma"></div> <div id="nascimento"></div> <!-- Verso --> <div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div> <img src="" alt="" id="qrcode" class="qrcode"> <div id="validade"><strong>Validade:</strong> fev/2024</div> <div id="school-name">Ícone Colégio e Curso</div> <div id="endereco">Av. dos Mananciais, 436 - Taquara, RJ</div> <div id="email">secretaria@unidade1.icone.g12.br</div> <div id="telefone">(21) 3900-8299</div> </div> </li>'
                appInitMananciais()
            }
        
            if(unidade == 'unidadeII'){
                document.getElementById('turmasInput').innerHTML = '<option value="">--Selecione a Turma--</option>'
                document.getElementById('select-turma-list').innerHTML = '<option value="null">--Selecione a Turma--</option>'
                document.getElementById('alunosInput').innerHTML = '<option value="">--Selecione o Aluno--</option>'
                document.getElementById('ul-cards').innerHTML = '<li> <ul class="card" id="card"> <li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li> <li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li> </ul> <div class="dados-alunos" id="dados-alunos"> <img src="" alt="" class="photo" id="photo"> <div id="matricula"></div> <div id="name"></div> <div id="turma"></div> <div id="nascimento"></div> <!-- Verso --> <div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div> <img src="" alt="" id="qrcode" class="qrcode"> <div id="validade"><strong>Validade:</strong> fev/2024</div> <div id="school-name">Ícone Colégio e Curso</div> <div id="endereco">Estr. do Tindiba, 3250 - Taquara, RJ</div> <div id="email">secretaria@unidade2.icone.g12.br</div> <div id="telefone">(21) 3900-8299</div> </div> </li>'
                appInitTindiba()
            }
        
            if(unidade == 'unidadeIV'){
                document.getElementById('turmasInput').innerHTML = '<option value="">--Selecione a Turma--</option>'
                document.getElementById('select-turma-list').innerHTML = '<option value="null">--Selecione a Turma--</option>'
                document.getElementById('alunosInput').innerHTML = '<option value="">--Selecione o Aluno--</option>'
                document.getElementById('ul-cards').innerHTML = '<li> <ul class="card" id="card"> <li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li> <li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li> </ul> <div class="dados-alunos" id="dados-alunos"> <img src="" alt="" class="photo" id="photo"> <div id="matricula"></div> <div id="name"></div> <div id="turma"></div> <div id="nascimento"></div> <!-- Verso --> <div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div> <img src="" alt="" id="qrcode" class="qrcode"> <div id="validade"><strong>Validade:</strong> fev/2024</div> <div id="school-name">Ícone Colégio e Curso</div> <div id="endereco">Praça Miguel Osório, 22 - Recreio, RJ</div> <div id="email">secretaria@unidade4.icone.g12.br</div> <div id="telefone">(21) 3900-8299</div> </div> </li>'
                appInitRecreio()
            }
        
            if(unidade == 'unidadeIII'){
                document.getElementById('turmasInput').innerHTML = '<option value="">--Selecione a Turma--</option>'
                document.getElementById('select-turma-list').innerHTML = '<option value="null">--Selecione a Turma--</option>'
                document.getElementById('alunosInput').innerHTML = '<option value="">--Selecione o Aluno--</option>'
                document.getElementById('ul-cards').innerHTML = '<li> <ul class="card" id="card"> <li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li> <li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li> </ul> <div class="dados-alunos" id="dados-alunos"> <img src="" alt="" class="photo" id="photo"> <div id="matricula"></div> <div id="name"></div> <div id="turma"></div> <div id="nascimento"></div> <!-- Verso --> <div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div> <img src="" alt="" id="qrcode" class="qrcode"> <div id="validade"><strong>Validade:</strong> fev/2024</div> <div id="school-name">Ícone Colégio e Curso</div> <div id="endereco">Estr. do Rio Grande, 1159 - Taquara, RJ</div> <div id="email">secretaria@kids.icone.g12.br</div> <div id="telefone">(21) 3900-8299</div> </div> </li>'
                appInitKids()
            }
        
        })

        function appInitTindiba(){
            const xhr = new XMLHttpRequest();
            const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetTurmas?nCodigoCliente=' + codClienteUnidadeII + '&sToken=' + tokenUnidadeII + '&sParametrosBusca=AnoLetivo=2023'
            
            xhr.open('GET', url, true);
            
            xhr.onload = function() {
              if (xhr.status === 200) {
                const data = xhr.responseXML;
                const turmas = data.getElementsByTagName('wsTurma')
                for(let i = 0; i <= turmas.length; i++){
                    if(turmas[i].childNodes[9].innerHTML == 'Aberta'){
                        document.getElementById('turmasInput').innerHTML += '<option value="' + turmas[i].childNodes[5].innerHTML + '">' + turmas[i].childNodes[3].innerHTML + '</option>'
                        document.getElementById('select-turma-list').innerHTML += '<option value="' + turmas[i].childNodes[5].innerHTML + '">' + turmas[i].childNodes[3].innerHTML + '</option>'
                    }
            
                }
                
              } else {
                console.error('Erro na requisição: ' + xhr.statusText);
              }
            };
            
            xhr.onerror = function() {
              console.error('Erro na requisição.');
            };
            
            xhr.send();
            
            document.getElementById('turmasInput').addEventListener('change', ()=>{
                document.getElementById('alunosInput').innerHTML = '<option value="">--Selecione o Aluno--</option>'
                const xhr = new XMLHttpRequest();
                const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' + codClienteUnidadeII + '&sToken=' + tokenUnidadeII + '&sParametrosBusca=Nome='
            
                xhr.open('GET', url, true);
            
                xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = xhr.responseXML;
                    const alunos = data.getElementsByTagName('wsAluno')
            
                    // Obtém a referência para o elemento select
                    const selectElement = document.getElementById('turmasInput');
            
                    // Obtém o índice da opção selecionada
                    const selectedIndex = selectElement.selectedIndex;
            
                    // Obtém a opção selecionada pelo índice
                    const selectedOption = selectElement.options[selectedIndex];
            
                    // Obtém o texto da opção selecionada
                    const selectedOptionText = selectedOption.textContent;
            
                    // Exibe o nome da opção selecionada
                    for(let i = 0; i <= alunos.length; i++){
                        if(alunos[i].childNodes[37].innerHTML == selectedOptionText){
                            document.getElementById('alunosInput').innerHTML += '<option value="' + alunos[i].childNodes[3].innerHTML + '">' + alunos[i].childNodes[5].innerHTML + '</option>'
                        }
            
                    }
                    
                } else {
                    console.error('Erro na requisição: ' + xhr.statusText);
                }
                };
            
                xhr.onerror = function() {
                console.error('Erro na requisição.');
                };
            
                xhr.send();
            })
            
            document.getElementById('turma-btn').addEventListener('click', ()=>{
                const xhr = new XMLHttpRequest();
                const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetImageApp?nCodigoCliente=' + codClienteUnidadeII + '&nAlunoID=' + document.getElementById('alunosInput').value + '&nResponsavelID=0&sToken=' + tokenUnidadeII + ''
            
                xhr.open('GET', url, true);
            
                xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = xhr.responseXML;
                    document.getElementById('photo').src = 'data:image/jpeg;base64,' +  data.getElementsByTagName('wsFotoApp')[0].childNodes[7].innerHTML
            
                    function dataAlunos(){
                        const xhr = new XMLHttpRequest();
                        const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' + codClienteUnidadeII + '&sToken=' + tokenUnidadeII + '&sParametrosBusca=Nome='
                
                        xhr.open('GET', url, true);
                
                        xhr.onload = function() {
                        if (xhr.status === 200) {
                            const data = xhr.responseXML;
                            const alunos = data.getElementsByTagName('wsAluno')
                
                            // Obtém a referência para o elemento select
                            const selectElement = document.getElementById('alunosInput');
                
                            // Obtém o índice da opção selecionada
                            const selectedIndex = selectElement.selectedIndex;
                
                            // Obtém a opção selecionada pelo índice
                            const selectedOption = selectElement.options[selectedIndex];
                
                            // Obtém o texto da opção selecionada
                            const selectedOptionText = selectedOption.textContent;
                
                            // Exibe o nome da opção selecionada
                            for(let i = 0; i <= alunos.length; i++){
                                if(alunos[i].childNodes[5].innerHTML == selectedOptionText){
                                    document.getElementById('matricula').innerHTML = '<span>Nº Matrícula:</span><br>' + alunos[i].childNodes[43].innerHTML
                                    document.getElementById('name').innerHTML = '<span>Nome:</span><br>' + alunos[i].childNodes[5].innerHTML
                                    document.getElementById('turma').innerHTML = '<span>Turma:</span><br>' + alunos[i].childNodes[37].innerHTML
                                    document.getElementById('nascimento').innerHTML = '<span>Data de Nascimento:</span><br>' + alunos[i].childNodes[13].innerHTML
                                    
                                    document.getElementById('qrcode').src = 'https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=' + alunos[i].childNodes[43].innerHTML
                                }
                
                            }
                            
                        } else {
                            console.error('Erro na requisição: ' + xhr.statusText);
                        }
                        };
                
                        xhr.onerror = function() {
                        console.error('Erro na requisição.');
                        };
                
                        xhr.send();
                    }
                    dataAlunos()
                    
                } else {
                    console.error('Erro na requisição: ' + xhr.statusText);
                }
                };
            
                xhr.onerror = function() {
                console.error('Erro na requisição.');
                };
            
                xhr.send();
            })

            //Impressão em massa

            // Array para armazenar as tags selecionadas
            const selectedTags = [];

            document.getElementById('select-turma-list').addEventListener('change', () => {
              const xhr = new XMLHttpRequest();
              const url =
                'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' +
                codClienteUnidadeII +
                '&sToken=' +
                tokenUnidadeII +
                '&sParametrosBusca=Nome=';
              document.getElementById('list-students').innerHTML = '';
              xhr.open('GET', url, true);
            
              xhr.onload = function () {
                if (xhr.status === 200) {
                  const data = xhr.responseXML;
                  const alunos = data.getElementsByTagName('wsAluno');
            
                  const selectElement = document.getElementById('select-turma-list');
                  const selectedIndex = selectElement.selectedIndex;
                  const selectedOption = selectElement.options[selectedIndex];
                  const selectedOptionText = selectedOption.textContent;
            
                  for (let i = 0; i < alunos.length; i++) {
                    if (alunos[i].childNodes[37].innerHTML == selectedOptionText) {
                      const matricula = alunos[i].childNodes[43].innerHTML;
                      const nome = alunos[i].childNodes[5].innerHTML;
                      const turma = alunos[i].childNodes[37].innerHTML;
                      const nascimento = alunos[i].childNodes[13].innerHTML;
            
                      const checkbox = document.createElement('input');
                      checkbox.type = 'checkbox';
            
                      checkbox.addEventListener('click', function () {
                        if (this.checked) {
                          selectedTags.push(alunos[i]);
                        } else {
                          const index = selectedTags.indexOf(alunos[i]);
                          if (index > -1) {
                            selectedTags.splice(index, 1);
                          }
                        }
                      });
            
                      const listItem = document.createElement('li');
                      listItem.appendChild(checkbox);
                      listItem.appendChild(document.createTextNode(' ' + nome));
            
                      document.getElementById('list-students').appendChild(listItem);
                    }
                  }
                } else {
                  console.error('Erro na requisição: ' + xhr.statusText);
                }
              };
            
              xhr.onerror = function () {
                console.error('Erro na requisição.');
              };
            
              xhr.send();
            });
            
            document.getElementById('generate-cards-btn').addEventListener('click', () => {
              document.getElementById('ul-cards').innerHTML = '';
            
              for (let i = 0; i < selectedTags.length; i++) {
                const xhrImage = new XMLHttpRequest();
                const url =
                  'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetImageApp?nCodigoCliente=' +
                  codClienteUnidadeII +
                  '&nAlunoID=' +
                  selectedTags[i].childNodes[3].innerHTML +
                  '&nResponsavelID=0&sToken=' +
                  tokenUnidadeII;
            
                xhrImage.open('GET', url, true);
            
                xhrImage.onload = function () {
                  if (xhrImage.status === 200) {
                    const data = xhrImage.responseXML;
            
                    const listItem = document.createElement('li');
                    listItem.innerHTML =
                      '<ul class="card" id="card">' +
                      '<li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li>' +
                      '<li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li>' +
                      '</ul>' +
                      '<div class="dados-alunos" id="dados-alunos">' +
                      '<img src="' +
                      'data:image/jpeg;base64,' +
                      data.getElementsByTagName('wsFotoApp')[0].childNodes[7].innerHTML +
                      '" alt="" class="photo" id="photo">' +
                      '<div id="matricula"><span>Nº Matrícula:</span><br>' +
                      selectedTags[i].childNodes[43].innerHTML +
                      '</div>' +
                      '<div id="name"><span>Nome:</span><br>' +
                      selectedTags[i].childNodes[5].innerHTML +
                      '</div>' +
                      '<div id="turma"><span>Turma:</span><br>' +
                      selectedTags[i].childNodes[37].innerHTML +
                      '</div>' +
                      '<div id="nascimento"><span>Data de Nascimento:</span><br>' +
                      selectedTags[i].childNodes[13].innerHTML +
                      '</div>' +
                      '<div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div>' +
                      '<img src="' + 'https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=' + selectedTags[i].childNodes[43].innerHTML + '" alt="" id="qrcode" class="qrcode">' +
                      '<div id="validade"><strong>Validade:</strong> fev/2024</div>' +
                      '<div id="school-name">Ícone Colégio e Curso</div>' +
                      '<div id="endereco">Estr. do Tindiba, 3250 - Taquara, RJ</div>' +
                      '<div id="email">secretaria@unidade2.icone.g12.br</div>' +
                      '<div id="telefone">(21) 3900-8299</div>' +
                      '</div>';
            
                    document.getElementById('ul-cards').appendChild(listItem);
                  } else {
                    console.error('Erro na requisição: ' + xhrImage.statusText);
                  }
                };
            
                xhrImage.onerror = function () {
                  console.error('Erro na requisição.');
                };
            
                xhrImage.send();
              }
            });
        }
        
        function appInitMananciais(){
            const xhr = new XMLHttpRequest();
            const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetTurmas?nCodigoCliente=' + codClienteUnidadeI + '&sToken=' + tokenUnidadeI + '&sParametrosBusca=AnoLetivo=2023'
            
            xhr.open('GET', url, true);
            
            xhr.onload = function() {
              if (xhr.status === 200) {
                const data = xhr.responseXML;
                const turmas = data.getElementsByTagName('wsTurma')
                for(let i = 0; i <= turmas.length; i++){
                    if(turmas[i].childNodes[9].innerHTML == 'Aberta'){
                        document.getElementById('turmasInput').innerHTML += '<option value="' + turmas[i].childNodes[5].innerHTML + '">' + turmas[i].childNodes[3].innerHTML + '</option>'
                        document.getElementById('select-turma-list').innerHTML += '<option value="' + turmas[i].childNodes[5].innerHTML + '">' + turmas[i].childNodes[3].innerHTML + '</option>'
                    }
            
                }
                
              } else {
                console.error('Erro na requisição: ' + xhr.statusText);
              }
            };
            
            xhr.onerror = function() {
              console.error('Erro na requisição.');
            };
            
            xhr.send();
            
            document.getElementById('turmasInput').addEventListener('change', ()=>{
                document.getElementById('alunosInput').innerHTML = '<option value="">--Selecione o Aluno--</option>'
                const xhr = new XMLHttpRequest();
                const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' + codClienteUnidadeI + '&sToken=' + tokenUnidadeI + '&sParametrosBusca=Nome='
            
                xhr.open('GET', url, true);
            
                xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = xhr.responseXML;
                    const alunos = data.getElementsByTagName('wsAluno')
            
                    // Obtém a referência para o elemento select
                    const selectElement = document.getElementById('turmasInput');
            
                    // Obtém o índice da opção selecionada
                    const selectedIndex = selectElement.selectedIndex;
            
                    // Obtém a opção selecionada pelo índice
                    const selectedOption = selectElement.options[selectedIndex];
            
                    // Obtém o texto da opção selecionada
                    const selectedOptionText = selectedOption.textContent;
            
                    // Exibe o nome da opção selecionada
                    for(let i = 0; i <= alunos.length; i++){
                        if(alunos[i].childNodes[37].innerHTML == selectedOptionText){
                            document.getElementById('alunosInput').innerHTML += '<option value="' + alunos[i].childNodes[3].innerHTML + '">' + alunos[i].childNodes[5].innerHTML + '</option>'
                        }
            
                    }
                    
                } else {
                    console.error('Erro na requisição: ' + xhr.statusText);
                }
                };
            
                xhr.onerror = function() {
                console.error('Erro na requisição.');
                };
            
                xhr.send();
            })
            
            document.getElementById('turma-btn').addEventListener('click', ()=>{
                const xhr = new XMLHttpRequest();
                const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetImageApp?nCodigoCliente=' + codClienteUnidadeI + '&nAlunoID=' + document.getElementById('alunosInput').value + '&nResponsavelID=0&sToken=' + tokenUnidadeI + ''
            
                xhr.open('GET', url, true);
            
                xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = xhr.responseXML;
                    document.getElementById('photo').src = 'data:image/jpeg;base64,' +  data.getElementsByTagName('wsFotoApp')[0].childNodes[7].innerHTML
            
                    function dataAlunos(){
                        const xhr = new XMLHttpRequest();
                        const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' + codClienteUnidadeI + '&sToken=' + tokenUnidadeI + '&sParametrosBusca=Nome='
                
                        xhr.open('GET', url, true);
                
                        xhr.onload = function() {
                        if (xhr.status === 200) {
                            const data = xhr.responseXML;
                            const alunos = data.getElementsByTagName('wsAluno')
                
                            // Obtém a referência para o elemento select
                            const selectElement = document.getElementById('alunosInput');
                
                            // Obtém o índice da opção selecionada
                            const selectedIndex = selectElement.selectedIndex;
                
                            // Obtém a opção selecionada pelo índice
                            const selectedOption = selectElement.options[selectedIndex];
                
                            // Obtém o texto da opção selecionada
                            const selectedOptionText = selectedOption.textContent;
                
                            // Exibe o nome da opção selecionada
                            for(let i = 0; i <= alunos.length; i++){
                                if(alunos[i].childNodes[5].innerHTML == selectedOptionText){
                                    document.getElementById('matricula').innerHTML = '<span>Nº Matrícula:</span><br>' + alunos[i].childNodes[43].innerHTML
                                    document.getElementById('name').innerHTML = '<span>Nome:</span><br>' + alunos[i].childNodes[5].innerHTML
                                    document.getElementById('turma').innerHTML = '<span>Turma:</span><br>' + alunos[i].childNodes[37].innerHTML
                                    document.getElementById('nascimento').innerHTML = '<span>Data de Nascimento:</span><br>' + alunos[i].childNodes[13].innerHTML
                                    
                                    document.getElementById('qrcode').src = 'https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=' + alunos[i].childNodes[43].innerHTML
                                }
                
                            }
                            
                        } else {
                            console.error('Erro na requisição: ' + xhr.statusText);
                        }
                        };
                
                        xhr.onerror = function() {
                        console.error('Erro na requisição.');
                        };
                
                        xhr.send();
                    }
                    dataAlunos()
                    
                } else {
                    console.error('Erro na requisição: ' + xhr.statusText);
                }
                };
            
                xhr.onerror = function() {
                console.error('Erro na requisição.');
                };
            
                xhr.send();
            })

            //Impressão em massa

            // Array para armazenar as tags selecionadas
            const selectedTags = [];

            document.getElementById('select-turma-list').addEventListener('change', () => {
              const xhr = new XMLHttpRequest();
              const url =
                'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' +
                codClienteUnidadeI +
                '&sToken=' +
                tokenUnidadeI +
                '&sParametrosBusca=Nome=';
              document.getElementById('list-students').innerHTML = '';
              xhr.open('GET', url, true);
            
              xhr.onload = function () {
                if (xhr.status === 200) {
                  const data = xhr.responseXML;
                  const alunos = data.getElementsByTagName('wsAluno');
            
                  const selectElement = document.getElementById('select-turma-list');
                  const selectedIndex = selectElement.selectedIndex;
                  const selectedOption = selectElement.options[selectedIndex];
                  const selectedOptionText = selectedOption.textContent;
            
                  for (let i = 0; i < alunos.length; i++) {
                    if (alunos[i].childNodes[37].innerHTML == selectedOptionText) {
                      const matricula = alunos[i].childNodes[43].innerHTML;
                      const nome = alunos[i].childNodes[5].innerHTML;
                      const turma = alunos[i].childNodes[37].innerHTML;
                      const nascimento = alunos[i].childNodes[13].innerHTML;
            
                      const checkbox = document.createElement('input');
                      checkbox.type = 'checkbox';
            
                      checkbox.addEventListener('click', function () {
                        if (this.checked) {
                          selectedTags.push(alunos[i]);
                        } else {
                          const index = selectedTags.indexOf(alunos[i]);
                          if (index > -1) {
                            selectedTags.splice(index, 1);
                          }
                        }
                      });
            
                      const listItem = document.createElement('li');
                      listItem.appendChild(checkbox);
                      listItem.appendChild(document.createTextNode(' ' + nome));
            
                      document.getElementById('list-students').appendChild(listItem);
                    }
                  }
                } else {
                  console.error('Erro na requisição: ' + xhr.statusText);
                }
              };
            
              xhr.onerror = function () {
                console.error('Erro na requisição.');
              };
            
              xhr.send();
            });
            
            document.getElementById('generate-cards-btn').addEventListener('click', () => {
              document.getElementById('ul-cards').innerHTML = '';
            
              for (let i = 0; i < selectedTags.length; i++) {
                const xhrImage = new XMLHttpRequest();
                const url =
                  'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetImageApp?nCodigoCliente=' +
                  codClienteUnidadeI +
                  '&nAlunoID=' +
                  selectedTags[i].childNodes[3].innerHTML +
                  '&nResponsavelID=0&sToken=' +
                  tokenUnidadeI;
            
                xhrImage.open('GET', url, true);
            
                xhrImage.onload = function () {
                  if (xhrImage.status === 200) {
                    const data = xhrImage.responseXML;
            
                    const listItem = document.createElement('li');
                    listItem.innerHTML =
                      '<ul class="card" id="card">' +
                      '<li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li>' +
                      '<li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li>' +
                      '</ul>' +
                      '<div class="dados-alunos" id="dados-alunos">' +
                      '<img src="' +
                      'data:image/jpeg;base64,' +
                      data.getElementsByTagName('wsFotoApp')[0].childNodes[7].innerHTML +
                      '" alt="" class="photo" id="photo">' +
                      '<div id="matricula"><span>Nº Matrícula:</span><br>' +
                      selectedTags[i].childNodes[43].innerHTML +
                      '</div>' +
                      '<div id="name"><span>Nome:</span><br>' +
                      selectedTags[i].childNodes[5].innerHTML +
                      '</div>' +
                      '<div id="turma"><span>Turma:</span><br>' +
                      selectedTags[i].childNodes[37].innerHTML +
                      '</div>' +
                      '<div id="nascimento"><span>Data de Nascimento:</span><br>' +
                      selectedTags[i].childNodes[13].innerHTML +
                      '</div>' +
                      '<div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div>' +
                      '<img src="' + 'https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=' + selectedTags[i].childNodes[43].innerHTML + '" alt="" id="qrcode" class="qrcode">' +
                      '<div id="validade"><strong>Validade:</strong> fev/2024</div>' +
                      '<div id="school-name">Ícone Colégio e Curso</div>' +
                      '<div id="endereco">Av. dos Mananciais, 436 - Taquara, RJ</div>' +
                      '<div id="email">secretaria@unidade1.icone.g12.br</div>' +
                      '<div id="telefone">(21) 3900-8299</div>' +
                      '</div>';
            
                    document.getElementById('ul-cards').appendChild(listItem);
                  } else {
                    console.error('Erro na requisição: ' + xhrImage.statusText);
                  }
                };
            
                xhrImage.onerror = function () {
                  console.error('Erro na requisição.');
                };
            
                xhrImage.send();
              }
            });
        }
        
        function appInitRecreio(){
            const xhr = new XMLHttpRequest();
            const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetTurmas?nCodigoCliente=' + codClienteUnidadeIV + '&sToken=' + tokenUnidadeIV + '&sParametrosBusca=AnoLetivo=2023'
            
            xhr.open('GET', url, true);
            
            xhr.onload = function() {
              if (xhr.status === 200) {
                const data = xhr.responseXML;
                const turmas = data.getElementsByTagName('wsTurma')
                for(let i = 0; i <= turmas.length; i++){
                    if(turmas[i].childNodes[9].innerHTML == 'Aberta'){
                        document.getElementById('turmasInput').innerHTML += '<option value="' + turmas[i].childNodes[5].innerHTML + '">' + turmas[i].childNodes[3].innerHTML + '</option>'
                        document.getElementById('select-turma-list').innerHTML += '<option value="' + turmas[i].childNodes[5].innerHTML + '">' + turmas[i].childNodes[3].innerHTML + '</option>'
                    }
            
                }
                
              } else {
                console.error('Erro na requisição: ' + xhr.statusText);
              }
            };
            
            xhr.onerror = function() {
              console.error('Erro na requisição.');
            };
            
            xhr.send();
            
            document.getElementById('turmasInput').addEventListener('change', ()=>{
                document.getElementById('alunosInput').innerHTML = '<option value="">--Selecione o Aluno--</option>'
                const xhr = new XMLHttpRequest();
                const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' + codClienteUnidadeIV + '&sToken=' + tokenUnidadeIV + '&sParametrosBusca=Nome='
            
                xhr.open('GET', url, true);
            
                xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = xhr.responseXML;
                    const alunos = data.getElementsByTagName('wsAluno')
            
                    // Obtém a referência para o elemento select
                    const selectElement = document.getElementById('turmasInput');
            
                    // Obtém o índice da opção selecionada
                    const selectedIndex = selectElement.selectedIndex;
            
                    // Obtém a opção selecionada pelo índice
                    const selectedOption = selectElement.options[selectedIndex];
            
                    // Obtém o texto da opção selecionada
                    const selectedOptionText = selectedOption.textContent;
            
                    // Exibe o nome da opção selecionada
                    for(let i = 0; i <= alunos.length; i++){
                        if(alunos[i].childNodes[37].innerHTML == selectedOptionText){
                            document.getElementById('alunosInput').innerHTML += '<option value="' + alunos[i].childNodes[3].innerHTML + '">' + alunos[i].childNodes[5].innerHTML + '</option>'
                        }
            
                    }
                    
                } else {
                    console.error('Erro na requisição: ' + xhr.statusText);
                }
                };
            
                xhr.onerror = function() {
                console.error('Erro na requisição.');
                };
            
                xhr.send();
            })
            
            document.getElementById('turma-btn').addEventListener('click', ()=>{
                const xhr = new XMLHttpRequest();
                const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetImageApp?nCodigoCliente=' + codClienteUnidadeIV + '&nAlunoID=' + document.getElementById('alunosInput').value + '&nResponsavelID=0&sToken=' + tokenUnidadeIV + ''
            
                xhr.open('GET', url, true);
            
                xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = xhr.responseXML;
                    document.getElementById('photo').src = 'data:image/jpeg;base64,' +  data.getElementsByTagName('wsFotoApp')[0].childNodes[7].innerHTML
            
                    function dataAlunos(){
                        const xhr = new XMLHttpRequest();
                        const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' + codClienteUnidadeIV + '&sToken=' + tokenUnidadeIV + '&sParametrosBusca=Nome='
                
                        xhr.open('GET', url, true);
                
                        xhr.onload = function() {
                        if (xhr.status === 200) {
                            const data = xhr.responseXML;
                            const alunos = data.getElementsByTagName('wsAluno')
                
                            // Obtém a referência para o elemento select
                            const selectElement = document.getElementById('alunosInput');
                
                            // Obtém o índice da opção selecionada
                            const selectedIndex = selectElement.selectedIndex;
                
                            // Obtém a opção selecionada pelo índice
                            const selectedOption = selectElement.options[selectedIndex];
                
                            // Obtém o texto da opção selecionada
                            const selectedOptionText = selectedOption.textContent;
                
                            // Exibe o nome da opção selecionada
                            for(let i = 0; i <= alunos.length; i++){
                                if(alunos[i].childNodes[5].innerHTML == selectedOptionText){
                                    document.getElementById('matricula').innerHTML = '<span>Nº Matrícula:</span><br>' + alunos[i].childNodes[43].innerHTML
                                    document.getElementById('name').innerHTML = '<span>Nome:</span><br>' + alunos[i].childNodes[5].innerHTML
                                    document.getElementById('turma').innerHTML = '<span>Turma:</span><br>' + alunos[i].childNodes[37].innerHTML
                                    document.getElementById('nascimento').innerHTML = '<span>Data de Nascimento:</span><br>' + alunos[i].childNodes[13].innerHTML
                                    
                                    document.getElementById('qrcode').src = 'https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=' + alunos[i].childNodes[43].innerHTML
                                }
                
                            }
                            
                        } else {
                            console.error('Erro na requisição: ' + xhr.statusText);
                        }
                        };
                
                        xhr.onerror = function() {
                        console.error('Erro na requisição.');
                        };
                
                        xhr.send();
                    }
                    dataAlunos()
                    
                } else {
                    console.error('Erro na requisição: ' + xhr.statusText);
                }
                };
            
                xhr.onerror = function() {
                console.error('Erro na requisição.');
                };
            
                xhr.send();
            })

            //Impressão em massa

            // Array para armazenar as tags selecionadas
            const selectedTags = [];

            document.getElementById('select-turma-list').addEventListener('change', () => {
              const xhr = new XMLHttpRequest();
              const url =
                'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' +
                codClienteUnidadeIV +
                '&sToken=' +
                tokenUnidadeIV +
                '&sParametrosBusca=Nome=';
              document.getElementById('list-students').innerHTML = '';
              xhr.open('GET', url, true);
            
              xhr.onload = function () {
                if (xhr.status === 200) {
                  const data = xhr.responseXML;
                  const alunos = data.getElementsByTagName('wsAluno');
            
                  const selectElement = document.getElementById('select-turma-list');
                  const selectedIndex = selectElement.selectedIndex;
                  const selectedOption = selectElement.options[selectedIndex];
                  const selectedOptionText = selectedOption.textContent;
            
                  for (let i = 0; i < alunos.length; i++) {
                    if (alunos[i].childNodes[37].innerHTML == selectedOptionText) {
                      const matricula = alunos[i].childNodes[43].innerHTML;
                      const nome = alunos[i].childNodes[5].innerHTML;
                      const turma = alunos[i].childNodes[37].innerHTML;
                      const nascimento = alunos[i].childNodes[13].innerHTML;
            
                      const checkbox = document.createElement('input');
                      checkbox.type = 'checkbox';
            
                      checkbox.addEventListener('click', function () {
                        if (this.checked) {
                          selectedTags.push(alunos[i]);
                        } else {
                          const index = selectedTags.indexOf(alunos[i]);
                          if (index > -1) {
                            selectedTags.splice(index, 1);
                          }
                        }
                      });
            
                      const listItem = document.createElement('li');
                      listItem.appendChild(checkbox);
                      listItem.appendChild(document.createTextNode(' ' + nome));
            
                      document.getElementById('list-students').appendChild(listItem);
                    }
                  }
                } else {
                  console.error('Erro na requisição: ' + xhr.statusText);
                }
              };
            
              xhr.onerror = function () {
                console.error('Erro na requisição.');
              };
            
              xhr.send();
            });
            
            document.getElementById('generate-cards-btn').addEventListener('click', () => {
              document.getElementById('ul-cards').innerHTML = '';
            
              for (let i = 0; i < selectedTags.length; i++) {
                const xhrImage = new XMLHttpRequest();
                const url =
                  'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetImageApp?nCodigoCliente=' +
                  codClienteUnidadeIV +
                  '&nAlunoID=' +
                  selectedTags[i].childNodes[3].innerHTML +
                  '&nResponsavelID=0&sToken=' +
                  tokenUnidadeIV;
            
                xhrImage.open('GET', url, true);
            
                xhrImage.onload = function () {
                  if (xhrImage.status === 200) {
                    const data = xhrImage.responseXML;
            
                    const listItem = document.createElement('li');
                    listItem.innerHTML =
                      '<ul class="card" id="card">' +
                      '<li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li>' +
                      '<li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li>' +
                      '</ul>' +
                      '<div class="dados-alunos" id="dados-alunos">' +
                      '<img src="' +
                      'data:image/jpeg;base64,' +
                      data.getElementsByTagName('wsFotoApp')[0].childNodes[7].innerHTML +
                      '" alt="" class="photo" id="photo">' +
                      '<div id="matricula"><span>Nº Matrícula:</span><br>' +
                      selectedTags[i].childNodes[43].innerHTML +
                      '</div>' +
                      '<div id="name"><span>Nome:</span><br>' +
                      selectedTags[i].childNodes[5].innerHTML +
                      '</div>' +
                      '<div id="turma"><span>Turma:</span><br>' +
                      selectedTags[i].childNodes[37].innerHTML +
                      '</div>' +
                      '<div id="nascimento"><span>Data de Nascimento:</span><br>' +
                      selectedTags[i].childNodes[13].innerHTML +
                      '</div>' +
                      '<div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div>' +
                      '<img src="' + 'https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=' + selectedTags[i].childNodes[43].innerHTML + '" alt="" id="qrcode" class="qrcode">' +
                      '<div id="validade"><strong>Validade:</strong> fev/2024</div>' +
                      '<div id="school-name">Ícone Colégio e Curso</div>' +
                      '<div id="endereco">Praça Miguel Osório, 22 - Recreio, RJ</div>' +
                      '<div id="email">secretaria@unidade4.icone.g12.br</div>' +
                      '<div id="telefone">(21) 3900-8299</div>' +
                      '</div>';
            
                    document.getElementById('ul-cards').appendChild(listItem);
                  } else {
                    console.error('Erro na requisição: ' + xhrImage.statusText);
                  }
                };
            
                xhrImage.onerror = function () {
                  console.error('Erro na requisição.');
                };
            
                xhrImage.send();
              }
            });

        }
        
        function appInitKids(){
            const xhr = new XMLHttpRequest();
            const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetTurmas?nCodigoCliente=' + codClienteUnidadeIII + '&sToken=' + tokenUnidadeIII + '&sParametrosBusca=AnoLetivo=2023'
            
            xhr.open('GET', url, true);
            
            xhr.onload = function() {
              if (xhr.status === 200) {
                const data = xhr.responseXML;
                const turmas = data.getElementsByTagName('wsTurma')
                for(let i = 0; i <= turmas.length; i++){
                    if(turmas[i].childNodes[9].innerHTML == 'Aberta'){
                        document.getElementById('turmasInput').innerHTML += '<option value="' + turmas[i].childNodes[5].innerHTML + '">' + turmas[i].childNodes[3].innerHTML + '</option>'
                        document.getElementById('select-turma-list').innerHTML += '<option value="' + turmas[i].childNodes[5].innerHTML + '">' + turmas[i].childNodes[3].innerHTML + '</option>'
                    }
            
                }
                
              } else {
                console.error('Erro na requisição: ' + xhr.statusText);
              }
            };
            
            xhr.onerror = function() {
              console.error('Erro na requisição.');
            };
            
            xhr.send();
            
            document.getElementById('turmasInput').addEventListener('change', ()=>{
                document.getElementById('alunosInput').innerHTML = '<option value="">--Selecione o Aluno--</option>'
                const xhr = new XMLHttpRequest();
                const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' + codClienteUnidadeIII + '&sToken=' + tokenUnidadeIII + '&sParametrosBusca=Nome='
            
                xhr.open('GET', url, true);
            
                xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = xhr.responseXML;
                    const alunos = data.getElementsByTagName('wsAluno')
            
                    // Obtém a referência para o elemento select
                    const selectElement = document.getElementById('turmasInput');
            
                    // Obtém o índice da opção selecionada
                    const selectedIndex = selectElement.selectedIndex;
            
                    // Obtém a opção selecionada pelo índice
                    const selectedOption = selectElement.options[selectedIndex];
            
                    // Obtém o texto da opção selecionada
                    const selectedOptionText = selectedOption.textContent;
            
                    // Exibe o nome da opção selecionada
                    for(let i = 0; i <= alunos.length; i++){
                        if(alunos[i].childNodes[37].innerHTML == selectedOptionText){
                            document.getElementById('alunosInput').innerHTML += '<option value="' + alunos[i].childNodes[3].innerHTML + '">' + alunos[i].childNodes[5].innerHTML + '</option>'
                            
                        }
            
                    }
                    
                } else {
                    console.error('Erro na requisição: ' + xhr.statusText);
                }
                };
            
                xhr.onerror = function() {
                console.error('Erro na requisição.');
                };
            
                xhr.send();
            })
            
            document.getElementById('turma-btn').addEventListener('click', ()=>{
                const xhr = new XMLHttpRequest();
                const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetImageApp?nCodigoCliente=' + codClienteUnidadeIII + '&nAlunoID=' + document.getElementById('alunosInput').value + '&nResponsavelID=0&sToken=' + tokenUnidadeIII + ''
            
                xhr.open('GET', url, true);
            
                xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = xhr.responseXML;
                    document.getElementById('photo').src = 'data:image/jpeg;base64,' +  data.getElementsByTagName('wsFotoApp')[0].childNodes[7].innerHTML
            
                    function dataAlunos(){
                        const xhr = new XMLHttpRequest();
                        const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' + codClienteUnidadeIII + '&sToken=' + tokenUnidadeIII + '&sParametrosBusca=Nome='
                
                        xhr.open('GET', url, true);
                
                        xhr.onload = function() {
                        if (xhr.status === 200) {
                            const data = xhr.responseXML;
                            const alunos = data.getElementsByTagName('wsAluno')
                
                            // Obtém a referência para o elemento select
                            const selectElement = document.getElementById('alunosInput');
                
                            // Obtém o índice da opção selecionada
                            const selectedIndex = selectElement.selectedIndex;
                
                            // Obtém a opção selecionada pelo índice
                            const selectedOption = selectElement.options[selectedIndex];
                
                            // Obtém o texto da opção selecionada
                            const selectedOptionText = selectedOption.textContent;
                
                            // Exibe o nome da opção selecionada
                            for(let i = 0; i <= alunos.length; i++){
                                if(alunos[i].childNodes[5].innerHTML == selectedOptionText){
                                    document.getElementById('matricula').innerHTML = '<span>Nº Matrícula:</span><br>' + alunos[i].childNodes[43].innerHTML
                                    document.getElementById('name').innerHTML = '<span>Nome:</span><br>' + alunos[i].childNodes[5].innerHTML
                                    document.getElementById('turma').innerHTML = '<span>Turma:</span><br>' + alunos[i].childNodes[37].innerHTML
                                    document.getElementById('nascimento').innerHTML = '<span>Data de Nascimento:</span><br>' + alunos[i].childNodes[13].innerHTML
                                    
                                    document.getElementById('qrcode').src = 'https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=' + alunos[i].childNodes[43].innerHTML
                                }
                
                            }
                            
                        } else {
                            console.error('Erro na requisição: ' + xhr.statusText);
                        }
                        };
                
                        xhr.onerror = function() {
                        console.error('Erro na requisição.');
                        };
                
                        xhr.send();
                    }
                    dataAlunos()
                    
                } else {
                    console.error('Erro na requisição: ' + xhr.statusText);
                }
                };
            
                xhr.onerror = function() {
                console.error('Erro na requisição.');
                };
            
                xhr.send();
            })

            //Impressão em massa

            // Array para armazenar as tags selecionadas
            const selectedTags = [];

            document.getElementById('select-turma-list').addEventListener('change', () => {
              const xhr = new XMLHttpRequest();
              const url =
                'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetAlunos2?nCodigoCliente=' +
                codClienteUnidadeIII +
                '&sToken=' +
                tokenUnidadeIII +
                '&sParametrosBusca=Nome=';
              document.getElementById('list-students').innerHTML = '';
              xhr.open('GET', url, true);
            
              xhr.onload = function () {
                if (xhr.status === 200) {
                  const data = xhr.responseXML;
                  const alunos = data.getElementsByTagName('wsAluno');
            
                  const selectElement = document.getElementById('select-turma-list');
                  const selectedIndex = selectElement.selectedIndex;
                  const selectedOption = selectElement.options[selectedIndex];
                  const selectedOptionText = selectedOption.textContent;
            
                  for (let i = 0; i < alunos.length; i++) {
                    if (alunos[i].childNodes[37].innerHTML == selectedOptionText) {
                      const matricula = alunos[i].childNodes[43].innerHTML;
                      const nome = alunos[i].childNodes[5].innerHTML;
                      const turma = alunos[i].childNodes[37].innerHTML;
                      const nascimento = alunos[i].childNodes[13].innerHTML;
            
                      const checkbox = document.createElement('input');
                      checkbox.type = 'checkbox';
            
                      checkbox.addEventListener('click', function () {
                        if (this.checked) {
                          selectedTags.push(alunos[i]);
                        } else {
                          const index = selectedTags.indexOf(alunos[i]);
                          if (index > -1) {
                            selectedTags.splice(index, 1);
                          }
                        }
                      });
            
                      const listItem = document.createElement('li');
                      listItem.appendChild(checkbox);
                      listItem.appendChild(document.createTextNode(' ' + nome));
            
                      document.getElementById('list-students').appendChild(listItem);
                    }
                  }
                } else {
                  console.error('Erro na requisição: ' + xhr.statusText);
                }
              };
            
              xhr.onerror = function () {
                console.error('Erro na requisição.');
              };
            
              xhr.send();
            });
            
            document.getElementById('generate-cards-btn').addEventListener('click', () => {
              document.getElementById('ul-cards').innerHTML = '';
            
              for (let i = 0; i < selectedTags.length; i++) {
                const xhrImage = new XMLHttpRequest();
                const url =
                  'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetImageApp?nCodigoCliente=' +
                  codClienteUnidadeIII +
                  '&nAlunoID=' +
                  selectedTags[i].childNodes[3].innerHTML +
                  '&nResponsavelID=0&sToken=' +
                  tokenUnidadeIII;
            
                xhrImage.open('GET', url, true);
            
                xhrImage.onload = function () {
                  if (xhrImage.status === 200) {
                    const data = xhrImage.responseXML;
            
                    const listItem = document.createElement('li');
                    listItem.innerHTML =
                      '<ul class="card" id="card">' +
                      '<li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li>' +
                      '<li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li>' +
                      '</ul>' +
                      '<div class="dados-alunos" id="dados-alunos">' +
                      '<img src="' +
                      'data:image/jpeg;base64,' +
                      data.getElementsByTagName('wsFotoApp')[0].childNodes[7].innerHTML +
                      '" alt="" class="photo" id="photo">' +
                      '<div id="matricula"><span>Nº Matrícula:</span><br>' +
                      selectedTags[i].childNodes[43].innerHTML +
                      '</div>' +
                      '<div id="name"><span>Nome:</span><br>' +
                      selectedTags[i].childNodes[5].innerHTML +
                      '</div>' +
                      '<div id="turma"><span>Turma:</span><br>' +
                      selectedTags[i].childNodes[37].innerHTML +
                      '</div>' +
                      '<div id="nascimento"><span>Data de Nascimento:</span><br>' +
                      selectedTags[i].childNodes[13].innerHTML +
                      '</div>' +
                      '<div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div>' +
                      '<img src="' + 'https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=' + selectedTags[i].childNodes[43].innerHTML + '" alt="" id="qrcode" class="qrcode">' +
                      '<div id="validade"><strong>Validade:</strong> fev/2024</div>' +
                      '<div id="school-name">Ícone Colégio e Curso</div>' +
                      '<div id="endereco">Estr. do Rio Grande, 1159 - Taquara, RJ</div>' +
                      '<div id="email">secretaria@kids.icone.g12.br</div>' +
                      '<div id="telefone">(21) 3900-8299</div>' +
                      '</div>';
            
                    document.getElementById('ul-cards').appendChild(listItem);
                  } else {
                    console.error('Erro na requisição: ' + xhrImage.statusText);
                  }
                };
            
                xhrImage.onerror = function () {
                  console.error('Erro na requisição.');
                };
            
                xhrImage.send();
              }
            });
        }

        
    } else {
    
    }
    }).catch((error) => {
    console.error(error);
});

get(child(dbRef, 'card_background/')).then((snapshot) => {
    if (snapshot.exists()) {

        const data = snapshot.val()
        document.getElementById('frente').src = data.frente.replaceAll('"', '')
        document.getElementById('verso').src = data.verso.replaceAll('"', '')

        document.getElementById('verse-icon').style.backgroundImage = 'url(' + data.verso.replaceAll('"', '') + ')'
        document.getElementById('front-icon').style.backgroundImage = 'url(' + data.frente.replaceAll('"', '') + ')'
        
    } else {
    
    }
    }).catch((error) => {
    console.error(error);
    });



//Fotos
document.getElementById('front').addEventListener('change', ()=>{
    // Obtém o elemento de input de arquivo
var input = document.getElementById('front');

// Verifica se algum arquivo foi selecionado
if (input.files && input.files[0]) {
  var reader = new FileReader();

  // Define a função de callback quando a imagem for carregada
  reader.onload = function(e) {
    var imageBase64 = e.target.result; // A imagem em base64

    // Use a imagem em base64 conforme necessário
    document.getElementById('front-icon').style.backgroundImage = 'url(' + imageBase64 + ')'
  };

  // Lê o arquivo como URL de dados
  reader.readAsDataURL(input.files[0]);
}
})

document.getElementById('verse').addEventListener('change', ()=>{
    // Obtém o elemento de input de arquivo
var input = document.getElementById('verse');

// Verifica se algum arquivo foi selecionado
if (input.files && input.files[0]) {
  var reader = new FileReader();

  // Define a função de callback quando a imagem for carregada
  reader.onload = function(e) {
    var imageBase64 = e.target.result; // A imagem em base64

    // Use a imagem em base64 conforme necessário
    document.getElementById('verse-icon').style.backgroundImage = 'url(' + imageBase64 + ')'
  };

  // Lê o arquivo como URL de dados
  reader.readAsDataURL(input.files[0]);
}
})

//Envia as imagens

document.getElementById('change-btn').addEventListener('click', ()=>{
    const db = getDatabase();
    set(ref(db, 'card_background/'), {
       frente: document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replace('"', ''),
       verso: document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replace('"', '')
    }).then(()=>{
        window.location.reload()
    })
})

document.getElementById('close').addEventListener('click', ()=>{
    document.getElementById('black-background').style.display = 'none'
    document.getElementById('modal-config').style.display = 'none'
    document.getElementById('modal-list').style.display = 'none'
    document.getElementById('modal-auth').style.display = 'none'
})

document.getElementById('config').addEventListener('click', ()=>{
    

    if(document.getElementById('config').style.backgroundImage == 'url("img/menuhover.png")'){
        document.getElementById('config').style.backgroundImage = 'url(img/menu.png)'
        document.getElementById('options').style.display = 'none'
    }else{
        document.getElementById('config').style.backgroundImage = 'url(img/menuhover.png)'
        document.getElementById('options').style.display = 'block'
    }
    
    //document.getElementById('modal-config').style.display = 'block'
    
})

//abrir mudar carteirinha
document.getElementById('change-background').addEventListener('click', ()=>{
    document.getElementById('black-background').style.display = 'block'
    document.getElementById('modal-config').style.display = 'block'
    document.getElementById('config').style.backgroundImage = 'url(img/menu.png)'
    document.getElementById('options').style.display = 'none'
})

//abrir selecionar alunos
document.getElementById('select-alunos').addEventListener('click', ()=>{
    document.getElementById('black-background').style.display = 'block'
    document.getElementById('modal-list').style.display = 'block'
    document.getElementById('config').style.backgroundImage = 'url(img/menu.png)'
    document.getElementById('options').style.display = 'none'
})

//abrir selecionar emails
document.getElementById('select-config').addEventListener('click', ()=>{
  document.getElementById('black-background').style.display = 'block'
  document.getElementById('modal-list').style.display = 'none'
  document.getElementById('config').style.backgroundImage = 'url(img/menu.png)'
  document.getElementById('options').style.display = 'none'
  document.getElementById('modal-auth').style.display = 'block'
})

//imprimir

document.getElementById('imprimir').addEventListener('click', ()=>{
    document.getElementById('nav').style.display = 'none'
    document.getElementById('imprimir').style.display = 'none'
    setTimeout(()=>{
        document.getElementById('nav').style.display = 'block'
        document.getElementById('imprimir').style.display = 'block'
    }, 1000*1)
    window.print()
})

//Configurações

//Autoriza os emails

// Capturando os elementos HTML
const emailInput = document.getElementById('email-add-input');
const addButton = document.getElementById('add-auth-btn');

// Função para salvar o email no Firebase Realtime Database
addButton.addEventListener('click', () => {
  const email = emailInput.value;

  if (email) {
    // Verificando se o email já existe
    const authorizedEmailsRef = ref(database, 'authorized_emails_idcard');

    get(authorizedEmailsRef).then((snapshot) => {
      let emailExists = false;

      // Verificando se o email já existe na lista
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        if (childData.email === email) {
          emailExists = true;
          return;
        }
      });

      if (emailExists) {
        alert('Email já existe na lista autorizada.');
      } else {
        // Se o email não existe, adicioná-lo ao banco de dados
        const newAuthorizedEmailRef = push(authorizedEmailsRef);
        set(newAuthorizedEmailRef, {
          email: email,
          nome: '',
          uid: ''
        }).then(() => {
          alert('Email adicionado com sucesso!');
        }).catch((error) => {
          alert('Erro ao adicionar o email: ' + error.message);
        });
      }
    }).catch((error) => {
      alert('Erro ao verificar o email: ' + error.message);
    });
  } else {
    alert('Por favor, insira um email válido.');
  }
});

//Lista de emails autorizados
// ...

// Função para exibir a lista de emails autorizados
function displayAuthorizedEmails() {
  const authorizedEmailsRef = ref(database, 'authorized_emails_idcard');

  get(authorizedEmailsRef).then((snapshot) => {
    const authorizedListDiv = document.getElementById('authorized-list');
    authorizedListDiv.innerHTML = ''; // Limpa o conteúdo anterior

    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();

      const emailDiv = document.createElement('div');
      emailDiv.className = 'authorized-email';

      const emailInfoDiv = document.createElement('div');
      emailInfoDiv.className = 'email-info';
      emailInfoDiv.innerHTML = `<strong>Nome:</strong> ${childData.nome}<br> <strong>Email:</strong> ${childData.email}`;

      const deleteButton = document.createElement('div');
      deleteButton.className = 'delete-btn';


      deleteButton.addEventListener('click', () => {
        const emailKey = childSnapshot.key; // Obtém a chave do email autorizado
        const email = childData.email;

      // Verifica se o email é o que você deseja impedir de ser removido
      if (email === 'pedrolucas@mis.icone.g12.br') {
        alert('Esse email pertence à um administrador do sistema, portanto não pode ser removido dos autorizados.');
        return; // Retorna sem fazer a exclusão
      }
      const emailRef = ref(database, `authorized_emails_idcard/${emailKey}`);
        
      remove(emailRef).then(() => {
        alert('Email autorizado removido com sucesso!');
        displayAuthorizedEmails();
      }).catch((error) => {
        alert('Erro ao remover o email autorizado: ' + error.message);
      });
    });

    emailDiv.appendChild(emailInfoDiv);
    emailDiv.appendChild(deleteButton);

    authorizedListDiv.appendChild(emailDiv);
    });
  }).catch((error) => {
    alert('Erro ao carregar a lista de emails autorizados: ' + error.message);
  });
}

//Alternar telas

document.getElementById('permissao-btn').addEventListener('click', ()=>{
  document.getElementById('add-auth').style.display = 'block'
  document.getElementById('access-requests').style.display = 'none'
  
})

document.getElementById('solicitacao-btn').addEventListener('click', ()=>{
  document.getElementById('add-auth').style.display = 'none'
  document.getElementById('access-requests').style.display = 'block'
})

//tentativas de acesso
function displayAccessRequests() {
  const accessRequestsRef = ref(database, 'auth_idcard_mails/tentative_acess');

  get(accessRequestsRef).then((snapshot) => {
    const accessRequestsDiv = document.getElementById('access-requests');
    accessRequestsDiv.innerHTML = ''; // Limpa o conteúdo anterior

    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();

      const requestDiv = document.createElement('div');
      requestDiv.className = 'access-request';

      const requestInfoDiv = document.createElement('div');
      requestInfoDiv.className = 'request-info';
      requestInfoDiv.innerHTML = `<strong>Nome:</strong> ${childData.name}<br> <strong>Email:</strong> ${childData.email}`;

      const acceptButton = document.createElement('div');
      acceptButton.className = 'accept-btn';
      acceptButton.addEventListener('click', () => {
        // Move o email para a lista de autorizados
        const authorizedEmailsRef = ref(database, 'authorized_emails_idcard');
        const newAuthorizedEmailRef = push(authorizedEmailsRef);
        const requestRef = ref(database, `auth_idcard_mails/tentative_acess/${childSnapshot.key}`);
        set(newAuthorizedEmailRef, {
          email: childData.email,
          nome: childData.name,
          uid: ''
        }).then(() => {
          // Após mover, exclui a solicitação
          remove(requestRef).then(() => {
            alert('Acesso concedido e solicitação removida com sucesso!');
            location.reload()
          }).catch((error) => {
            alert('Erro ao remover a solicitação: ' + error.message);
          });
        }).catch((error) => {
          alert('Erro ao conceder acesso: ' + error.message);
        });

      });

      const denyButton = document.createElement('div');
      denyButton.className = 'deny-btn';
      denyButton.addEventListener('click', () => {
        const requestRef = ref(database, `auth_idcard_mails/tentative_acess/${childSnapshot.key}`);
        
        remove(requestRef).then(() => {
          alert('Solicitação negada e removida com sucesso!');
          location.reload()
        }).catch((error) => {
          alert('Erro ao remover a solicitação: ' + error.message);
        });
      });

      requestDiv.appendChild(requestInfoDiv);
      requestDiv.appendChild(acceptButton);
      requestDiv.appendChild(denyButton);

      accessRequestsDiv.appendChild(requestDiv);
    });
  }).catch((error) => {
    alert('Erro ao carregar as solicitações de acesso: ' + error.message);
  });
}

// Chama a função para exibir a lista de emails autorizados ao carregar a página
window.addEventListener('load', () => {
  const userEmail = localStorage.getItem('userUidiccCardUID');

  if (!userEmail) {
    // Se o email não estiver no localStorage, redireciona para a página de login
    window.location.href = './../';
  } else {
    // Verifica se o email está na lista de autorizados
    const authorizedEmailsRef = ref(database, 'authorized_emails_idcard');

    get(authorizedEmailsRef).then((snapshot) => {
      const authorizedEmails = snapshot.val();

      if (authorizedEmails) {
        const isAuthorized = Object.values(authorizedEmails).some(item => item.email === userEmail);

        if (isAuthorized) {
          // Usuário autorizado
        } else {
          // Usuário não autorizado, redireciona para a página de login
          window.location.href = './../';
        }
      } else {
        alert('Erro ao carregar a lista de emails autorizados.');
      }
    }).catch((error) => {
      alert('Erro ao verificar autorização: ' + error.message);
    });
  }

  displayAuthorizedEmails();
  displayAccessRequests();
});

document.getElementById('exit').addEventListener('click', ()=>{
    localStorage.removeItem('userUidiccCardUID')
    location.reload()
})