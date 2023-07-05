

export default function PresenceList() {

  const listStudents = studentInfos.map(studentInfos =>
      <div
        key={studentInfos.name}
        style={{
          color: studentInfos.isPresent ? 'green' : 'red'
      }}>
          {studentInfos.name} {studentInfos.surname} - {studentInfos.school}
       </div>
  )

  return (
      <div>
          <h1>Presence list</h1>
          <h1>{listStudents}</h1>
      </div>
  );
}

const studentInfos = [
  {name: "Ophelie ", surname: "Bugnon", school: "heia", isPresent:true},
  {name: "Toto ", surname: "Bugnon", school: "EPFL", isPresent:false},
]


