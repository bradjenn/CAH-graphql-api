CREATE TABLE "public"."Packs" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255)
);
CREATE TABLE "public"."BlackCards" (
  id SERIAL PRIMARY KEY NOT NULL,
  text TEXT,
  pick INT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "packId" INTEGER NOT NULL,
  FOREIGN KEY ("packId") REFERENCES "public"."Packs"(id)
);
CREATE TABLE "public"."WhiteCards" (
  id SERIAL PRIMARY KEY NOT NULL,
  text TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "packId" INTEGER NOT NULL,
  FOREIGN KEY ("packId") REFERENCES "public"."Packs"(id)
);
