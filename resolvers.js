const resolvers = {
  Query: {
    greet: () => {
      return "Hello World";
    },
    bags: (_, __, { dataSources }) => {
      return dataSources.allBagsDataAPI.getAllBags();
    },
    singleBag: (_, { id }, { dataSources }) => {
      return dataSources.allBagsDataAPI.getSingleBag(id);
    },
  },
};

export default resolvers;
