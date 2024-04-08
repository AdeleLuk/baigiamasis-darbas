# Projekto paleidimo instrukcijos

Terminale atidarykite 'atsiskaitymas' folderį ir jame naudokite komandinę eilutę:

### `npm run json`

JSON serveris paleis:

http://localhost:8085/users [http://localhost:8085/users]
http://localhost:8085/questions [http://localhost:8085/questions]


### `npm start`

Būsite automatiškai nukelti į [http://localhost:3000](http://localhost:3000), kur peržiūrėsite projektą savo naršyklėje (developer mode). O duomenys bus atsiųsti iš JSON server [http://localhost:8085/questions] ir [http://localhost:8085/users] 

Prieš pasileidami projektą instaliuokite šiuos npm paketus:

import styled from 'styled-components';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import { emojiCursor } from "cursor-effects";
