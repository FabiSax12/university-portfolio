import { Award, Calendar, ExternalLink, Zap, type Props } from "lucide-astro";

export interface Certificate {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
  status: 'active' | 'expired' | 'lifetime';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  image?: string;
}

export interface CertificateCategory {
  name: string;
  icon: string | ((_props: Props) => any);
  certificates: Certificate[];
  color: {
    primary: string;
    secondary: string;
    bg: string;
    border: string;
    accent: string;
  };
}

export const certificatesData: CertificateCategory[] = [
  {
    name: "Desarrollo Frontend",
    icon: Zap,
    color: {
      primary: "text-blue-600 dark:text-blue-400",
      secondary: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
      accent: "bg-blue-100 dark:bg-blue-800/50"
    },
    certificates: [
      {
        name: "React - The Complete Guide",
        issuer: "Udemy",
        issueDate: "2024-01-15",
        credentialId: "UC-12345678",
        credentialUrl: "https://www.udemy.com/certificate/UC-12345678/",
        skills: ["React", "Redux", "Hooks", "Context API", "Next.js"],
        description: "Curso completo sobre React incluyendo hooks avanzados, manejo de estado con Redux, optimización de rendimiento y mejores prácticas para desarrollo de aplicaciones modernas.",
        status: 'lifetime',
        level: 'advanced',
        image: "/icons/certificates/react-certificate.jpg"
      },
      {
        name: "TypeScript for JavaScript Developers",
        issuer: "Microsoft Learn",
        issueDate: "2023-11-20",
        credentialId: "MS-TS-2023-456",
        credentialUrl: "https://learn.microsoft.com/en-us/users/fabianvargas/achievements/",
        skills: ["TypeScript", "Type Safety", "Generics", "Interfaces", "Advanced Types"],
        description: "Certificación oficial de Microsoft cubriendo TypeScript desde fundamentos hasta conceptos avanzados como tipos condicionales, utility types y patrones de diseño typesafe.",
        status: 'lifetime',
        level: 'intermediate',
        image: "/icons/certificates/typescript-certificate.jpg"
      }
    ]
  },
  {
    name: "Desarrollo Backend y Cloud",
    icon: Award,
    color: {
      primary: "text-green-600 dark:text-green-400",
      secondary: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-700",
      accent: "bg-green-100 dark:bg-green-800/50"
    },
    certificates: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        issueDate: "2023-09-10",
        expiryDate: "2026-09-10",
        credentialId: "AWS-CCP-789012",
        credentialUrl: "https://www.credly.com/badges/aws-ccp-789012",
        skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda", "RDS"],
        description: "Certificación foundacional de AWS que valida conocimientos sobre servicios de nube, arquitectura, seguridad, precios y soporte técnico en Amazon Web Services.",
        status: 'active',
        level: 'intermediate',
        image: "/icons/certificates/aws-certificate.jpg"
      }
    ]
  }
];

// Funciones de utilidad para estadísticas
export const getCertificatesStats = () => {
  const allCertificates = certificatesData.flatMap(category => category.certificates);
  const active = allCertificates.filter(cert => cert.status === 'active');
  const lifetime = allCertificates.filter(cert => cert.status === 'lifetime');
  const expired = allCertificates.filter(cert => cert.status === 'expired');

  const skillsSet = new Set(allCertificates.flatMap(cert => cert.skills));
  const uniqueSkills = skillsSet.size;

  const issuers = new Set(allCertificates.map(cert => cert.issuer));

  return {
    total: allCertificates.length,
    active: active.length,
    lifetime: lifetime.length,
    expired: expired.length,
    uniqueSkills,
    issuers: issuers.size
  };
};

export const getCategoryStats = (category: CertificateCategory) => {
  const active = category.certificates.filter(cert => cert.status === 'active').length;
  const lifetime = category.certificates.filter(cert => cert.status === 'lifetime').length;
  const expired = category.certificates.filter(cert => cert.status === 'expired').length;
  const total = category.certificates.length;

  return {
    active,
    lifetime,
    expired,
    total,
    validCertificates: active + lifetime
  };
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long'
  });
};

export const isExpiringSoon = (expiryDate?: string): boolean => {
  if (!expiryDate) return false;
  
  const expiry = new Date(expiryDate);
  const now = new Date();
  const threeMonthsFromNow = new Date();
  threeMonthsFromNow.setMonth(now.getMonth() + 3);
  
  return expiry <= threeMonthsFromNow && expiry > now;
};