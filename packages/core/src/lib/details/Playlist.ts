import { IPlaylist } from "../../types";

export default class Playlist implements IPlaylist {
  constructor(
    public name = "",
    public total_tracks = 0,
    public tracks: string[] = []
  ) {}
}
