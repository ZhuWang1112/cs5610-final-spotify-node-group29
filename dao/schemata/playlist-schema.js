import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    playListName: { type: String, required: true },
    description: { type: String },
    songs: { type: Array, default: [] },
    img: { type: String },
},{collection: "playlists"});

export default playlistSchema;