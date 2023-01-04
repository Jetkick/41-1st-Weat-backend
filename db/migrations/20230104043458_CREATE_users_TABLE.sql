-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(500) NOT NULL,
  password  VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  mobile VARCHAR(50) NOT NULL,
  level VARCHAR(200) NULL,
  point DECIMAL NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE users;
