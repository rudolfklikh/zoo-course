import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { IZooSectionContentContainerCentered } from '../../../../../interfaces';
import { ZooBaseContainerComponent } from '../base-container/base-conatiner.component';
import { ZooHighlightKeywordPipe } from '../../../../../pipes';

@Component({
	selector: 'zoo-container-centered',
	templateUrl: './container-centered.component.html',
	styleUrls: ['./container-centered.component.scss'],
	standalone: true,
	imports: [CommonModule, ZooHighlightKeywordPipe],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZooContainerCenteredComponent extends ZooBaseContainerComponent<IZooSectionContentContainerCentered> {
	public hasImage = computed(() => !!this.metadata().image);
	public hasList = computed(() => !!this.metadata().list?.length);
}
