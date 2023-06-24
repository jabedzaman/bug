import { IArtist } from "../../types";

export default class Artist implements IArtist {
  constructor(public id = "", public name = "", public herf = "") {}
}
