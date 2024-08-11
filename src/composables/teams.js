const DATA = {
  A1: {
    teamName: 'A1',
    teamPhoto:
      'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2023/10/a1_saison_23_24.jpg',
    year: '2008',
    trainers: [
      {
        trainerPhoto:
          'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2023/10/Kadir_Deniz_Yalcinkaya.jpg',
        trainerName: 'Nico Hahl',
        trainerPosition: 'Trainer A1-Jugend',
        email: 'example@gmail.com'
      },
      {
        trainerPhoto:
          'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2023/10/Kadir_Deniz_Yalcinkaya.jpg',
        trainerName: 'Nico Hahl',
        trainerPosition: 'Trainer A1-Jugend',
        email: 'example@gmail.com'
      }
    ],
    trainingDay1: 'Dienstags',
    trainingTime1: '16:30 - 18:00 Uhr',
    trainingDay2: 'Donnerstags',
    trainingTime2: '16:30 - 18:00 Uhr'
  },
  B1: {
    teamName: 'B1',
    teamPhoto:
      'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2023/10/d1_saison_23_24.jpg',
    year: '78888',
    trainers: [{ trainerPhoto: '', trainerName: '', trainerPosition: '', email: '' }],
    trainingTime: ''
  },
  '1M': {
    teamName: '1. Mannschaft',
    teamPhoto:
      'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2023/10/d1_saison_23_24.jpg',
    year: '1999',
    trainers: [{ trainerPhoto: '', trainerName: '', trainerPosition: '', email: '' }],
    trainingTime: ''
  },
  '2M': {
    teamName: '2. Mannschaft',
    teamPhoto:
      'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2023/10/d1_saison_23_24.jpg',
    year: '1998',
    trainers: [{ trainerPhoto: '', trainerName: '', trainerPosition: '', email: '' }],
    trainingTime: ''
  },
  'Alte-herren': {
    teamName: 'Alte Herren',
    teamPhoto:
      'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2022/01/alte-herren-2022.jpg',
    year: 'ab 32',
    trainers: [
      {
        trainerPhoto:
          'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2021/01/vassilios-anagnostakis.jpeg',
        trainerName: 'Vassilios Anagnostakis',
        trainerPosition: 'Vorstand',
        email: 'example@gmail.com'
      }
    ],
    trainingTime1: 'Dienstags, 16:30 - 18:00 Uhr',
    trainingTime2: 'Donnerstags, 16:30 - 18:00 Uhr'
  }
}

export default function useTeams() {
  return {
    allTeams: DATA,
    jugende: getJugende(),
    jugendeList: getList(),
    aktiveList: getList('aktive'),
    aktive: getAktive()
  }
}

function getJugende() {
  let jugende = {}
  for (const key in DATA) {
    if (!['1M', '2M', 'Alte-herren'].includes(key)) {
      jugende[key] = DATA[key]
    }
  }
  return jugende
}

function getAktive() {
  let aktive = {}
  for (const key in DATA) {
    if (['1M', '2M'].includes(key)) {
      aktive[key] = DATA[key]
    }
  }
  return aktive
}

function getList(team = 'jugende') {
  let teamType = null
  if (team === 'jugende') {
    teamType = getJugende()
  } else {
    teamType = getAktive()
  }
  const list = []
  for (const key in teamType) {
    list.push({ id: key, name: teamType[key].teamName })
  }
  return list
}
