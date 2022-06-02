import { Box } from '@mui/system';

interface ILayoutPage {
  titulo: string;
  children?: React.ReactNode;
}
export const LayoutPage: React.FC<ILayoutPage> = ({ children, titulo }) => {
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box>{titulo}</Box>

      <Box>Barra de Ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  );
};
