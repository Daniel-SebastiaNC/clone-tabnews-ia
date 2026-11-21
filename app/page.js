const names = ['Ana', 'Bruno', 'Carla'];

export default function HomePage() {
  return (
    <main>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
