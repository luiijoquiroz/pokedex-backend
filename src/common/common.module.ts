import { Module } from '@nestjs/common';
import { FetchAdapter } from '../common/adapters/fecth.adapter';
@Module({
  providers: [FetchAdapter],
  exports: [FetchAdapter],
})
export class CommonModule {}
