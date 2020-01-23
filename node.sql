--
-- Database: `projeto_node`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `conteudo`
--

CREATE TABLE `conteudo` (
  `id` int(10) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `mudulo` varchar(200) default NULL, 
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

--
-- Extraindo dados da tabela `conteudo`
--

INSERT INTO `conteudo` (`nome`, `modulo`) VALUES
('tecnologia', 'parte');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conteudo`
--
ALTER TABLE `conteudo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conteudo`