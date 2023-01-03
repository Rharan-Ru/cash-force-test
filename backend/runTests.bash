echo "Preparing enviromment for tests"

echo "Undo Migrates from dev database for tests"
npm run docker-undo-migrate
echo "Make Migrations to dev database for tests"
npm run docker-migrate
echo "Make Seeds to dev database for tests"
npm run docker-seed

echo "Wait a moment to running tests"
docker exec -it cash_backend node node_modules/mocha/bin/mocha --require ts-node/register src/test/**/*.test.ts --exit

echo "Recreating database"
npm run docker-undo-migrate
npm run docker-migrate
npm run docker-seed