import shortId from 'shortid';
import faker from 'faker';

export const generateDummyRead = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      type: 'read',
      User: { id: shortId.generate(), nickname: faker.name.findName() },
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      Images: [{ src: faker.image.image() }],
    }));
