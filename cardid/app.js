import { getDatabase, ref, set, push, child, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
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
                document.getElementById('turmasInput').innerHTML = '<option value="">--Selecione a Unidade--</option>'
                document.getElementById('select-turma-list').innerHTML = '<option value="null">--Selecione a Turma--</option>'
                document.getElementById('ul-cards').innerHTML = '<li> <ul class="card" id="card"> <li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li> <li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li> </ul> <div class="dados-alunos" id="dados-alunos"> <img src="" alt="" class="photo" id="photo"> <div id="matricula"></div> <div id="name"></div> <div id="turma"></div> <div id="nascimento"></div> <!-- Verso --> <div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div> <img src="" alt="" id="qrcode" class="qrcode"> <div id="validade"><strong>Validade:</strong> fev/2024</div> <div id="school-name">Ícone Colégio e Curso</div> <div id="endereco">Av. dos Mananciais, 436 - Taquara, RJ</div> <div id="email">secretaria@unidade1.icone.g12.br</div> <div id="telefone">(21) 3900-8299</div> </div> </li>'
                appInitMananciais()
            }
        
            if(unidade == 'unidadeII'){
                document.getElementById('turmasInput').innerHTML = '<option value="">--Selecione a Unidade--</option>'
                document.getElementById('select-turma-list').innerHTML = '<option value="null">--Selecione a Turma--</option>'
                document.getElementById('ul-cards').innerHTML = '<li> <ul class="card" id="card"> <li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li> <li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li> </ul> <div class="dados-alunos" id="dados-alunos"> <img src="" alt="" class="photo" id="photo"> <div id="matricula"></div> <div id="name"></div> <div id="turma"></div> <div id="nascimento"></div> <!-- Verso --> <div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div> <img src="" alt="" id="qrcode" class="qrcode"> <div id="validade"><strong>Validade:</strong> fev/2024</div> <div id="school-name">Ícone Colégio e Curso</div> <div id="endereco">Estr. do Tindiba, 3250 - Taquara, RJ</div> <div id="email">secretaria@unidade2.icone.g12.br</div> <div id="telefone">(21) 3900-8299</div> </div> </li>'
                appInitTindiba()
            }
        
            if(unidade == 'unidadeIV'){
                document.getElementById('turmasInput').innerHTML = '<option value="">--Selecione a Unidade--</option>'
                document.getElementById('select-turma-list').innerHTML = '<option value="null">--Selecione a Turma--</option>'
                document.getElementById('ul-cards').innerHTML = '<li> <ul class="card" id="card"> <li><img src="' + document.getElementById('front-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="frente"></li> <li><img src="' + document.getElementById('verse-icon').style.backgroundImage.replace('url(', '').replace(')', '').replaceAll('"', '') + '" alt="" id="verso"></li> </ul> <div class="dados-alunos" id="dados-alunos"> <img src="" alt="" class="photo" id="photo"> <div id="matricula"></div> <div id="name"></div> <div id="turma"></div> <div id="nascimento"></div> <!-- Verso --> <div id="lei">A Lei da Meia-Entrada (Lei nº 12.933/2013) estabelece que todo estudante regularmente matriculado tem direito a pagar metade do valor em eventos culturais, esportivos e de lazer. Essa carteirinha comprova a condição de estudante e permite o acesso aos benefícios previstos na lei.</div> <img src="" alt="" id="qrcode" class="qrcode"> <div id="validade"><strong>Validade:</strong> fev/2024</div> <div id="school-name">Ícone Colégio e Curso</div> <div id="endereco">Praça Miguel Osório, 22 - Recreio, RJ</div> <div id="email">secretaria@unidade4.icone.g12.br</div> <div id="telefone">(21) 3900-8299</div> </div> </li>'
                appInitRecreio()
            }
        
            if(unidade == 'unidadeIII'){
                document.getElementById('turmasInput').innerHTML = '<option value="">--Selecione a Unidade--</option>'
                document.getElementById('select-turma-list').innerHTML = '<option value="null">--Selecione a Turma--</option>'
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
})

document.getElementById('config').addEventListener('click', ()=>{
    document.getElementById('black-background').style.display = 'block'
    //document.getElementById('modal-config').style.display = 'block'
    
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