import styled from 'styled-components';

const SkillTag = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.codeBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  margin: 0.3rem;
`;

export default SkillTag;