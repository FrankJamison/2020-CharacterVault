const charactersService = new CharactersService();
const characterList = new CharacterList(charactersService);

characterList.init();