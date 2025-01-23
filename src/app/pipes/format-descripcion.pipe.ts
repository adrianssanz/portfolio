import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'formatDescripcion' })
export class FormatDescripcionPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const formattedText = value
      .replace(/\n/g, '<br>')       // Reemplaza \n por <br>
      .replace(/•/g, '•');  // Opcional: Usa íconos o estilos para viñetas
    return this.sanitizer.bypassSecurityTrustHtml(formattedText);
  }
}