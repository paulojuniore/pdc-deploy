const fs = require('fs');

// Função responsável por ler um arquivo .csv e retorná-lo em formato de array
//onde cada item representa uma linha do arquivo.
const readFile = (file) => {
  const data = fs.readFileSync(file, {
    encoding: 'utf8',
    flag: 'r'
  });

  const generosSplitted = data.split('\n')
  generosSplitted.splice(generosSplitted.length - 1)

  return generosSplitted;
}

// Função responsável por preparar os dados de tabelas (que possuem apenas o campo
//"descricao" como colunas (exceto o id)) para inserção no banco de dados.
const buildDescricao = descricoes => {
  const dados = [];
  for (let i = 0; i < descricoes.length; i++) {
    dados.push({
      descricao: descricoes[i].trim()
    });
  }
  return dados;
}

// Função responsável por preparar os dados de disciplinas para inserção no banco de dados.
const buildDisciplinas = disciplinas => {
  const dados = [];
  for (let i = 0; i < disciplinas.length; i++) {
    const tokens_disciplina = disciplinas[i].split(';');
    dados.push({
      codigo: tokens_disciplina[0],
      creditos: tokens_disciplina[1],
      horas: tokens_disciplina[2],
      nome: tokens_disciplina[3],
    });
  }
  return dados;
}

// Função responsável por preparar os dados de naturalidade para inserção no banco de dados.
const buildNaturalidades = (municipios) => {
  const dados = [];
  for (let i = 0; i < municipios.length; i++) {
    const tokens_municipio = municipios[i].split(';');
    dados.push({
      municipio: tokens_municipio[0],
      estado: tokens_municipio[1],
    });
  }
  return dados;
}

// Função responsável por preparar os dados de tabelas que possuem apenas um
//um atributo "nome" (exceto o id) para inserção no banco de dados.
const buildNomes = (nomes) => {
  const dados = [];
  for (let i = 0; i < nomes.length; i++) {
    dados.push({
      nome: nomes[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de professores para inserção no banco de dados.
const buildProfessores = (professores) => {
  const dados = [];
  for (let i = 0; i < professores.length; i++) {
    dados.push({
      siape: professores[i]
    });
  }
  return dados;
}

// Função responsável por preparar os dados de turmas para inserção no banco de dados.
const buildTurmas = (turmas) => {
  const dados = [];
  for (let i = 0; i < turmas.length; i++) {
    const tokens_turmas = turmas[i].split(';');
    dados.push({
      id_disciplina: Number(tokens_turmas[0]),
      turma: Number(tokens_turmas[1]),
      periodo: tokens_turmas[2],
      id_horario: Number(tokens_turmas[3]),
      id_sala: Number(tokens_turmas[4]),
    });
  }
  return dados;
}

// Função responsável por preparar os dados do relacionamento entre turma e professores para
//inserção no banco de dados.
const buildTurmaProfessores = (turmas_professores) => {
  const dados = [];
  for (let i = 0; i < turmas_professores.length; i++) {
    const tokens_turmas_professores = turmas_professores[i].split(';');
    dados.push({
      id_turma: Number(tokens_turmas_professores[0]),
      siape: tokens_turmas_professores[1],
    });
  }
  return dados;
}

// Função responsável por preparar os dados dos discentes para inserção no banco de dados.
const buildDiscentes = (alunos) => {
  const dados = [];
  for (let i = 0; i < alunos.length; i++) {
    const tokens_aluno = alunos[i].split(';');

    dados.push({
      cpf: tokens_aluno[0],
      nome: tokens_aluno[1],
      ano_nascimento: Number(tokens_aluno[2]),
      email: tokens_aluno[3],
      id_genero: Number(tokens_aluno[4]),
      id_estado_civil: Number(tokens_aluno[5]),
      id_nacionalidade: Number(tokens_aluno[6]),
      id_pais_origem: Number(tokens_aluno[7]),
      id_naturalidade: Number(tokens_aluno[8]),
      id_cor: Number(tokens_aluno[9])
    });
  }

  return dados;
}

// Função responsável por preparar os dados do relacionamento entre discente e 
//deficiências para inserção no banco de dados.
const buildDiscentesDeficiencias = (aluno_deficiencias) => {
  const dados = [];
  for (let i = 0; i < aluno_deficiencias.length; i++) {
    const tokens_aluno = aluno_deficiencias[i].split(';');
    dados.push({
      cpf: tokens_aluno[0],
      id_deficiencia: Number(tokens_aluno[1]),
    });
  }
  return dados;
}

// Função responsável por preparar os dados do relacionamento entre discente e 
//disciplinas para inserção no banco de dados.
const buildDiscenteDisciplinas = (aluno_disciplinas) => {
  const dados = [];
  for (let i = 0; i < aluno_disciplinas.length; i++) {
    const tokens_aluno_disciplinas = aluno_disciplinas[i].split(';');

    // verifica se o id_turma é válido ou não
    if (tokens_aluno_disciplinas[1] === "") {
      tokens_aluno_disciplinas[1] = null;
    } else {
      tokens_aluno_disciplinas[1] = Number(tokens_aluno_disciplinas[1]);
    }

    // substituindo a "," por "." nos valores de ponto flutuante válidos, e caso não haja
    //valor válido, é assumido null.
    for (let j = 2; j < tokens_aluno_disciplinas.length - 1; j++) {
      if (tokens_aluno_disciplinas[j] === "" || tokens_aluno_disciplinas[j] === "-") {
        tokens_aluno_disciplinas[j] = null;
      } else {
        tokens_aluno_disciplinas[j] = Number(tokens_aluno_disciplinas[j].replace(',', '.'));
      }
    }

    dados.push({
      matricula: tokens_aluno_disciplinas[0],
      id_turma: tokens_aluno_disciplinas[1],
      num_faltas: tokens_aluno_disciplinas[2],
      nota1: tokens_aluno_disciplinas[3],
      nota2: tokens_aluno_disciplinas[4],
      nota3: tokens_aluno_disciplinas[5],
      nota4: tokens_aluno_disciplinas[6],
      nota5: tokens_aluno_disciplinas[7],
      nota6: tokens_aluno_disciplinas[8],
      nota7: tokens_aluno_disciplinas[9],
      nota8: tokens_aluno_disciplinas[10],
      media_parcial: tokens_aluno_disciplinas[11],
      prova_final: tokens_aluno_disciplinas[12],
      media_final: tokens_aluno_disciplinas[13],
      id_situacao: Number(tokens_aluno_disciplinas[14]),
    });
  }
  return dados;
}

// Função responsável por preparar os dados de vínculos de discentes para 
//inserção no banco de dados.
const buildDiscentesVinculos = (aluno_vinculos) => {
  const dados = [];
  for (let i = 0; i < aluno_vinculos.length; i++) {
    const tokens_aluno = aluno_vinculos[i].split(';');

    // caso no lugar da Nota de ingresso ENEM/Vestibular seja igual a um '-', este é
    // substituído por null.
    if (tokens_aluno[26] === '' || isNaN(tokens_aluno[26])) {
      tokens_aluno[26] = null
    } else {
      tokens_aluno[26] = Number(tokens_aluno[26].replace(',', '.'));
    }

    for (let j=8; j <= 25; j++) {
      if (j === 18 || j === 19 || j === 20) {
        if (tokens_aluno[j] === '') {
          tokens_aluno[j] = null;
        } else {
          tokens_aluno[j] = Number(tokens_aluno[j].replace(',', '.'));
        }
      }
      else if (Number(tokens_aluno[j]) === 0) {
        tokens_aluno[j] = null;
      } else {
        tokens_aluno[j] = Number(tokens_aluno[j]);
      }
    }

    dados.push({
      cpf: tokens_aluno[0],
      matricula: tokens_aluno[1],
      id_ingresso: Number(tokens_aluno[2]) === 0 ? null : Number(tokens_aluno[2]),
      periodo_ingresso: tokens_aluno[3],
      id_curso: Number(tokens_aluno[4]),
      id_situacao: Number(tokens_aluno[5]),
      periodo_situacao: tokens_aluno[6],
      id_situacao_vinculo: Number(tokens_aluno[7]),
      id_cota: Number(tokens_aluno[8]) === 0 ? null : Number(tokens_aluno[8]),
      id_tipo_escola: Number(tokens_aluno[9]) === 0 ? null : Number(tokens_aluno[9]),
      ano_conclusao_ensino_medio: tokens_aluno[10],
      curriculo: tokens_aluno[11],
      carga_hor_obrig_int: tokens_aluno[12],
      cred_obrig_int: tokens_aluno[13],
      carga_hor_opt_int: tokens_aluno[14],
      cred_opt_int: tokens_aluno[15],
      carga_hor_comp_int: tokens_aluno[16],
      cred_comp_int: tokens_aluno[17],
      cra: tokens_aluno[18],
      mc: tokens_aluno[19],
      iea: tokens_aluno[20],
      per_int: tokens_aluno[21],
      tranc: tokens_aluno[22],
      mat_inst: tokens_aluno[23],
      mob_estudantil: tokens_aluno[24],
      cred_matriculados: tokens_aluno[25],
      media_geral_ingresso: tokens_aluno[26],
    });
  }
  return dados;
}

// Função responsável por preparar os dados de faltas para inserção no banco de dados.
const buildFaltas = (faltas) => {
  const dados = [];
  for (let i = 0; i < faltas.length; i++) {
    const tokens_faltas = faltas[i].split(';');
    dados.push({
      matricula: tokens_faltas[0],
      id_turma: Number(tokens_faltas[1]),
      num_aula: Number(tokens_faltas[2]),
    });
  }
  return dados;
}

module.exports = { 
  readFile,
  buildDescricao,
  buildDisciplinas,
  buildNaturalidades,
  buildNomes,
  buildProfessores,
  buildTurmas,
  buildTurmaProfessores,
  buildDiscentes,
  buildDiscentesDeficiencias,
  buildDiscenteDisciplinas,
  buildDiscentesVinculos,
  buildFaltas,
}