import exxpress from 'express';

const app = express();


app.use(express.json());

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})