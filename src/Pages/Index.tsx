import Container from "../components/Container";
import * as parser from "iptv-playlist-parser";
import { createSignal, For } from "solid-js";

export default function Index() {
  const [playlist, setPlaylist] = createSignal<parser.Playlist>();

  const playlistUrl = `http://localhost:${import.meta.env.VITE_SERVER_PORT}`;

  fetch(playlistUrl)
    .then((res) => res.json())
    .then((body) => {
      setPlaylist(body);
    });

  return (
    <Container>
      <For each={playlist()?.items}>
        {
          (playlist, i) => <li>{playlist.group.title}</li>
        }
      </For>
    </Container>
  );
}
